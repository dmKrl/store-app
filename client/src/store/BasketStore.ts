import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Device = {
    id: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
};

type BasketDevice = {
    basketId: number;
    createdAt: string;
    device: Device;
    deviceId: number;
    id: number;
    quantity: number;
    updatedAt: string;
};

interface Basket {
    basketDevices: Array<BasketDevice>;
    allPrice: Array<number | null>;

    setBasketDevices: (devices: Array<BasketDevice>) => void;
    getAllBasketDevices: (
        basketId: number | null,
    ) => Promise<BasketDevice[] | null>;
    setAllPrice: (priceDevice: number) => void;
}

export const useBasketStore = create<Basket>()(
    persist(
        devtools(
            immer((set) => ({
                basketDevices: [],
                allPrice: [],

                setBasketDevices: (devices): void => {
                    set((state) => {
                        state.basketDevices = devices;
                    });
                },
                setAllPrice: (priceDevice: number): void => {
                    set((state) => {
                        state.allPrice.push(priceDevice);
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
