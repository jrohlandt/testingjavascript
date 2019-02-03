const {sum, sumAsync, subtract} = require('../math');
const {test, expect} = require('../testlib');

test('sumAsync adds numbers', async () => {
    let result = await sumAsync(3, 7);
    let expected = 10;
    expect(result).toBe(expected);
});


test('subtracts numbers', () => {
    let result = subtract(5, 2);
    let expected = 3;
    expect(result).toBe(expected);
});



