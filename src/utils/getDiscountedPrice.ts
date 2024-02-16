export const getDiscountedPrice = (price: number, percentageDiscount: number): number => {
    const discount = (percentageDiscount / 100) * price;
    return +(price - discount).toFixed(2);
};