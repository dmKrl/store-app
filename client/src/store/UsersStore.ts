import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
const registrationUrl = 'http://localhost:5000/api/user/registration';
const authorizationUrl = 'http://localhost:5000/api/user/login';
const checkUserUrl = 'http://localhost:5000/api/user/auth';

type User = {
    token: string;
    username: string;
};

interface Users {
    usernameState: string;
    isLoading: boolean;

    authUser: (email: string, password: string) => void;
    registrationUser: (
        email: string,
        password: string,
        username: string,
    ) => void;
    setUsernameState: () => void;
    checkUser: () => Promise<string>;
}

export const useUsersStore = create<Users>()(
    immer((set) => ({
        usernameState: '',
        isLoading: false,
        setUsernameState: (): void => {
            set({ usernameState: '' });
        },
        authUser: async (email: string, password: string) => {
            const response = await fetch(authorizationUrl, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });
            set({ isLoading: true });
            const responseData = (await response.json()) as User;
            localStorage.setItem('access_token', responseData.token); // Посмотреть как поменять LS на Cookie
            set({ usernameState: responseData.username, isLoading: false });
        },
        registrationUser: async (
            email: string,
            password: string,
            username: string,
        ) => {
            const response = await fetch(registrationUrl, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    username,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });
            set({ isLoading: true });
            const responseData = (await response.json()) as User;
            set({ usernameState: responseData.username, isLoading: false });
        },
        checkUser: async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                const response = await fetch(checkUserUrl, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                const responseData = (await response.json()) as User;
                if (!responseData.token) {
                    throw new Error();
                }
                return responseData.token;
            } catch (error: unknown) {
                if (error instanceof Error) {
                    return error.message;
                } else {
                    return 'Произошла неизвестная ошибка';
                }
            }
        },
    })),
);
