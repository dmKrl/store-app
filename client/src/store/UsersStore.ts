import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
// const registrationUrl = 'http://localhost:5000/api/user/registration';
const authorizationUrl = 'http://localhost:5000/api/user/login';

type User = {
    token: string;
    username: string;
};

interface Users {
    username: string;
    isLoading: boolean;

    authUser: (email: string, password: string) => void;
}

export const useUsersStore = create<Users>()(
    immer((set) => ({
        username: '',
        isLoading: false,
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
            set({ username: responseData.username, isLoading: false });
        },
    })),
);
