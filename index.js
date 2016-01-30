#!/usr/bin/env node
'use strict';
const version = require('./package.json').version;
const products = require('./generators/products');
const stores = require('./generators/stores');
const program = require('commander');

program.version(version)
        .option('--products [number]', 'Generate [number] products', 0)
        .parse(process.argv);

let data = {
    products: [],
    stores: stores.generate(),
    cart: []
};

if (program.products) {
    data.products = products.generate(Number.parseInt(program.products));
}

module.exports = function () {
    return data;
};
