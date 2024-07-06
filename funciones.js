function calculateDiscountedPrice (precio, porcentaje) {
    const precioDescontado = precio - (precio*porcentaje)/100;
    return precioDescontado;
}

const originalPrice = 100;
const discountPercentage = 20;

const precioDescontado = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log('Original Price: ' + originalPrice);
console.log('Discount: ' + discountPercentage);
console.log('Price with discount: ' + precioDescontado + '€');

