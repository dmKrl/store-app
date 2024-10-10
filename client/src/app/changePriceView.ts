export default function changePriceView(price: number): string {
    const setPrice = price.toLocaleString('ru-RU');
    return `${setPrice}.00`;
}
