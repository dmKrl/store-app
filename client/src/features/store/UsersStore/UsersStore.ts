import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
const registrationUrl = 'http://localhost:5000/api/user/registration';
const authorizationUrl = 'http://localhost:5000/api/user/login';
const checkUserUrl = 'http://localhost:5000/api/user/auth';

type User = {
    token: string;
    username: string;
    message: string;
    userId: number | null;
};
type UserToken = {
    token: string;
    status: number;
    message: string;
};

interface Users {
    userState: User;
    isLoading: boolean;

    authUser: (email: string, password: string) => Promise<User>;
    registrationUser: (
        email: string,
        password: string,
        username: string,
    ) => Promise<User>;
    setUserState: () => void;
    setIsLoading: () => void;
    checkUser: () => Promise<UserToken>;
}

export const useUsersStore = create<Users>()(
    persist(
        devtools(
            immer((set) => ({
                userState: {
                    token: '',
                    username: '',
                    userId: null,
                    message: '',
                },
                isLoading: false,
                setIsLoading: (): void =>
                    set((state) => {
                        state.isLoading = !state.isLoading;
                    }),
                setUserState: (): void => {
                    set({
                        userState: {
                            token: '',
                            username: '',
                            userId: 0,
                            message: '',
                        },
                    });
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
                    const responseData = (await response.json()) as User;
                    localStorage.setItem('access_token', responseData.token); // Посмотреть как поменять LS на Cookie
                    console.log(responseData);
                    set({
                        userState: responseData,
                    });
                    return responseData;
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
                    const responseData = (await response.json()) as User;
                    set({
                        userState: responseData,
                    });
                    return responseData;
                },
                checkUser: async () => {
                    const accessToken = localStorage.getItem('access_token');
                    const response = await fetch(checkUserUrl, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    const responseData = (await response.json()) as UserToken;

                    return responseData;
                },
            })),
        ),
        { name: 'usersStore', version: 1 },
    ),
);
