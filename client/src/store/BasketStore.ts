import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type BasketDevice = {
    name: string;
    image: string;
    price: number;
    quantity: number;
};

interface Basket {
    basketDevices: Array<BasketDevice>;

    setBasketDevices: () => void;
}

export const useBasketStore = create<Basket>()(
    persist(
        devtools(
            immer((set) => ({
                basketDevices: [],

                setBasketDevices: (): void => {
                    set((state) => {
                        state.basketDevices !== state.basketDevices;
                    });
                },
            })),
        ),
        { name: 'basketStore', version: 1 },
    ),
);
