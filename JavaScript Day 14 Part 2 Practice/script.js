// API Call Simulation with Data Processing //

function fetchProduct(productId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching product ${productId}...`);
        setTimeout(() => {
            if (productId > 0) {
                resolve({
                    id: productId,
                    name: "Laptop",
                    price: 999
                });
            } else {
                reject("Invalid product ID");
            }
        }, 1500);
    });
}

function applyDiscount(product, discountPercent) {
    return new Promise((resolve, reject) => {
        console.log(`Applying $(discountPercent)% discount...`);
        setTimeout(() => {
            if (discountPercent >= 0 && discountPercent <= 100) {
            const discountedPrice = product.price - (product.price * discountPercent / 100);


            resolve({
                ...product,
                originalPrice: product.price,
                discountedPrice: discountedPrice,
                discount: discountPercent
            });
        } else {
            reject("Invalid discount percentage");
        }
        }, 1000);
    });
}

function calculateTax(product, taxRate) {
    return new Promise((resolve, reject) => {
        console.log(`Caculating tax at ${taxRate}%`);
        setTimeout(() => {
            const taxtAmount = product.discountedPrice * (taxRate / 100);
            const finalPrice = product.discountedPrice + taxtAmount;


            resolve({
                ...product,
                taxRate: taxRate,
                taxtAmount: taxtAmount,
                finalPrice: finalPrice
            });
        }, 1000);
    });
}

console.log("=== Starting Product Purchase ===");

fetchProduct(1)

    .then((product) => {
        console.log("Product fetched:", product.name, "-", product.price);
        return applyDiscount(product, 20);
    })

    .then((discountedProduct) => {
        console.log((`Discount applied: ${discountedProduct.originalPrice} -> $${discountedProduct.discountedPrice}`));
        return calculateTax(discountedProduct, 10);
    })

    .then((finalProduct) => {
        console.log("=== Purchase Summary ===");
        console.log(`Product: ${finalProduct.name}`);
        console.log(`Original Price: $${finalProduct.originalPrice}`);
        console.log(`Discount (${finalProduct.discount}%): - $${finalProduct.originalPrice - finalProduct.discountedPrice}`);
        console.log(`Tax (${finalProduct.taxRate}%): + $${finalProduct.taxtAmount.toFixed(2)}`);
        console.log(`Final Price: $${finalProduct.finalPrice.toFixed(2)}`);
    })

    .catch((error) => {
        console.log("Error in purchase process:", error);
    });