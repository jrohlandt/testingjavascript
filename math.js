// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

// pointless async functions to illustrate async tests.
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = {sum, subtract, sumAsync, subtractAsync};

