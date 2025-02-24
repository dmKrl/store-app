import { Suspense } from "react";
import { RouteObject } from "react-router";
import { NotFound } from "src/pages/ui/NotFound/NotFound";
import { MainPage } from "src/pages/ui/MainPage/MainPage";
import { PayDelivery } from "src/pages/ui/PayDeliveryPage/PayDelivery";
import { ContactsPage } from "src/pages/ui/ContactsPage/ContactsPage";
import { InfoProductPage } from "src/pages/ui/InfoProductPage/InfoProductPage";
import { InstractionsPage } from "src/pages/ui/InstractionsPage/InstractionsPage";
import { CatalogPage } from "src/pages/ui/CatalogPage/CatalogPage";
import { BasketPage } from "src/pages/ui/BasketPage/BasketPage";

export const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <Suspense fallback={<div>Loading...</div>}><MainPage /></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>
    },
    {
        path: '/pay-delivery',
        element: <Suspense fallback={<div>Loading...</div>}><PayDelivery /></Suspense>
    },
    {
        path: '/contacts',
        element: <Suspense fallback={<div>Loading...</div>}><ContactsPage /></Suspense>
    },
    {
        path: '/product',
        element: <Suspense fallback={<div>Loading...</div>}><InfoProductPage /></Suspense>
    },
    {
        path: '/instraction',
        element: <Suspense fallback={<div>Loading...</div>}><InstractionsPage /></Suspense>
    },
    {
        path: '/catalog',
        element: <Suspense fallback={<div>Loading...</div>}><CatalogPage /></Suspense>
    },
    {
        path: '/basket',
        element: <Suspense fallback={<div>Loading...</div>}><BasketPage /></Suspense>
    },
]