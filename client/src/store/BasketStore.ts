import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type BasketDevice = {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
};

interface Basket {
    basketDevices: Array<BasketDevice>;

    setBasketDevices: (devices: Array<BasketDevice>) => void;
    getAllBasketDevices: (
        basketId: number | null,
    ) => Promise<BasketDevice[] | null>;
}
//Запрос в Postman работает корректно, но не работает в браузере.
//Ругается на body в GET запросе. Разобратся, как исправить проблему
//21.11.2024
export const useBasketStore = create<Basket>()(
    persist(
        devtools(
            immer((set) => ({
                basketDevices: [],

                setBasketDevices: (devices): void => {
                    set((state) => {
                        state.basketDevices = devices;
                    });
                },
                getAllBasketDevices: async (
                    basketId: number | null,
                ): Promise<BasketDevice[] | null> => {
                    if (basketId === null) {
                        return null;
                    }
                    const response = await fetch(
                        `http://localhost:5000/api/basket/${basketId}`,
                        {
                            method: 'GET',
                            headers: {
                                'content-type': 'application/json',
                            },
                        },
                    );
                    const responseData =
                        (await response.json()) as Array<BasketDevice>;
                    set({ basketDevices: responseData });
                    return responseData;
                },
            })),
        ),
        { name: 'basketStore', version: 1 },
    ),
);
