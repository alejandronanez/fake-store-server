'use strict';

const faker = require('faker');

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

/**
 * Get a random element from an array
 * @param  {Array} myArr The array to extract data from
 * @return {[type]}       One element from the array
 */
function getElementFromArray(myArr) {
    const index = Math.floor(Math.random() * (myArr.length - 1)) + 1;
    return myArr[index];
}

/**
 * Generate data for products
 * @param {Number} size How many products wanted to generate
 * @return {Object} The resulting array of products
 */
function generateProducts(size) {
    let i = 1;
    let result = [];

    for (i; i <= size; i++) {
        let data = {};
        data.id = faker.random.uuid();
        data.name = faker.commerce.productName();
        data.description = faker.lorem.paragraph();
        data.colors = [faker.commerce.color()];
        data.sizes = [getElementFromArray(sizes), getElementFromArray(sizes), getElementFromArray(sizes)];

        result.push(data);
    }

    return result;
}

module.exports = {
    generate: generateProducts
};
