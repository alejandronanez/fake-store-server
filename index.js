'use strict';
const products = require('./generators/products');
const stores = require('./generators/stores');

module.exports = function () {
    return {
        products: products.generate(20),
        stores: stores.generate(),
        carts: []
    };
};
