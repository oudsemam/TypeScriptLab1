"use strict";
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) {
            tallest = mountain;
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    }
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
console.log(findNameOfTallestMountain(mountains));
var products = [
    {
        name: 'nail polish',
        price: 3.99,
    },
    {
        name: 'earbuds',
        price: 9.99,
    },
    {
        name: 'frame',
        price: 16.00,
    },
];
function calcAverageProductPrice(products) {
    var averagePrice = 0;
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (!averagePrice) {
            averagePrice = 0;
        }
        if (product.price > 0) {
            total = product.price + total;
            averagePrice = total / products.length;
        }
    }
    return averagePrice;
}
console.log(calcAverageProductPrice(products));
var inventory = [
    {
        product: {
            name: 'motor',
            price: 10.00,
        },
        quantity: 10,
    },
    {
        product: {
            name: 'sensor',
            price: 12.50,
        },
        quantity: 4,
    },
    {
        product: {
            name: 'LED',
            price: 1.00,
        },
        quantity: 20,
    },
];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        if (!item.quantity) {
            total = 0;
        }
        if (item.quantity > 0) {
            var itemTotal = item.quantity * item.product.price;
            total += itemTotal;
        }
    }
    return total;
}
console.log(calcInventoryValue(inventory));
