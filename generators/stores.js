'use strict';

const faker = require('faker');

/**
 * Generate data for Store
 * @return {Object} Return
 */
function generateStore() {
    let result = {};

    result.id = faker.random.uuid();
    result.name = faker.company.companyName();
    result.description = faker.lorem.paragraph();
    result.address = {
        city: faker.address.streetAddress(),
        state: faker.address.city(),
        country: faker.address.country(),
        zip: faker.address.zipCode()
    };
    result.owner = `${faker.name.firstName()} ${faker.name.lastName()}`;
    result.email = faker.internet.email();

    return result;
}

module.exports = {
    generate: generateStore
};
