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

interface BasketPriceDevices {
    counter: number;
}

interface Basket {
    basketDevices: Array<BasketDevice>;
    allPrice: BasketPriceDevices[];

    setBasketDevices: (devices: Array<BasketDevice>) => void;
    getAllBasketDevices: (
        basketId: number | null,
    ) => Promise<BasketDevice[] | null>;
    totalSetAllPrice: (totalAllPrice: BasketPriceDevices[]) => void;
    resetAllPrice: () => void;
}

export const useBasketStore = create<Basket>()(
    persist(
        devtools(
            immer((set) => ({
                basketDevices: [],
                allPrice: [{ counter: 0 }],
                totalSetAllPrice: (
                    totalAllPrice: BasketPriceDevices[],
                ): void => {
                    set((state) => {
                        state.allPrice = totalAllPrice;
                    });
                },
                resetAllPrice: (): void => {
                    set((state) => {
                        state.allPrice = [{ counter: 0 }];
                    });
                },
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
                }
            })),
        ),
        { name: 'basketStore', version: 1 },
    ),
);
