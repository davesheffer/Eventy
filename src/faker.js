const { faker } = require('faker');

const fake = faker.fake('{{name.firstName}} {{name.lastName}}');
console.log(fake);
