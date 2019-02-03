async function test(title, callback) {
    try {
        await callback();
        console.log(`\u2713 ${title}`);
    } catch (error) {
        console.error(`X ${title}`);
        console.error(error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
    }
}

exports.test = test;
exports.expect = expect;