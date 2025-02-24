interface BasketPriceDevices {
    counter: number;
}

export default function sumAllPriceBasketDevices(
    allPrice: BasketPriceDevices[] | undefined | null,
): number {
    return (allPrice || []).reduce((sum, current) => {
        return (sum += current.counter);
    }, 0);
}
