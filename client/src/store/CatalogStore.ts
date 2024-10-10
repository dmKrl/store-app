import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
const urlAllDevices = 'http://localhost:5000/api/device';

type Devices = {
    id: number;
    numGen: string;
    name: string;
    price: string;
    img: string;
    rating: number;
};
type CatalogResponse = {
    rows: Array<Devices>;
};
interface Catalog {
    allDevices: Array<Devices>;

    getAllDevices: () => Promise<CatalogResponse>;
}

export const useCatalogStore = create<Catalog>()(
    persist(
        devtools(
            immer((set) => ({
                allDevices: [],

                getAllDevices: async () => {
                    const response = await fetch(urlAllDevices);
                    const responseData =
                        (await response.json()) as CatalogResponse;
                    console.log(responseData);
                    set({ allDevices: responseData.rows });
                    return responseData;
                },
            })),
        ),
        { name: 'ModalStore', version: 1 },
    ),
);
