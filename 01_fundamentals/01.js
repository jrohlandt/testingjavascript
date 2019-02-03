const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;
expect(result).toBe(expected);


result = subtract(5, 2);
expected = 3;
expect(result).toBe(expected);

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toBeTrue() {
            if (actual !== true) {
                throw new Error(`${actual} is not TRUE`);
            }
        },
        toBeFalse() {
            if (actual !== false) {
                throw new Error(`${actual} is not FALSE`);
            }
        },

    }
}

