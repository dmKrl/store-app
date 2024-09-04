import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface Modals {
    isVisibleModalAuth: boolean;
    isVisibleModalRegistration: boolean;

    setIsVisibleModalAuth: () => void;
    setIsVisibleModalRegistration: () => void;
    switchVisibleModals: () => void;
    closeVisibleModals: () => void;
}

export const useModalStore = create<Modals>()(
    persist(
        devtools(
            immer((set) => ({
                isVisibleModalAuth: false,
                isVisibleModalRegistration: false,

                setIsVisibleModalAuth: (): void =>
                    set((state) => {
                        state.isVisibleModalAuth = !state.isVisibleModalAuth;
                    }),
                setIsVisibleModalRegistration: (): void =>
                    set((state) => {
                        state.isVisibleModalRegistration =
                            !state.isVisibleModalRegistration;
                    }),
                switchVisibleModals: () =>
                    set((state) => {
                        state.isVisibleModalAuth = !state.isVisibleModalAuth;
                        state.isVisibleModalRegistration =
                            !state.isVisibleModalRegistration;
                    }),
                closeVisibleModals: () =>
                    set((state) => {
                        state.isVisibleModalAuth = false;
                        state.isVisibleModalRegistration = false;
                    }),
            })),
        ),
        { name: 'ModalStore', version: 1 },
    ),
);
