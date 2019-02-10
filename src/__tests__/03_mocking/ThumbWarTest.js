const thumbWar = require('../../thumb-war.js');
const utils = require('../../utils.js');

test('player1 can win', function() {

    // Override/Mock utils getWinner method so we can test thumbWar consistently.
    jest.spyOn(utils, 'getWinner');
    utils.getWinner.mockImplementation((p1, p2) => p1);
    // utils.getWinner = jest.fn((p1, p2) => p1);
    const p1 = 'Jeandre R';
    const p2 = 'Kent C. Dodds';
    const winner = thumbWar(p1, p2);
    console.log(winner);
    // return;
    expect(winner).toBe('Jeandre R');
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    expect(utils.getWinner).toHaveBeenCalledWith(p1, p2);

    utils.getWinner.mockRestore();
});

test('player2 can win', function() {
    jest.spyOn(utils, 'getWinner');
    utils.getWinner.mockImplementation((p1, p2) => p2);

    const winner2 = thumbWar('Jeandre R', 'Kent C. Dodds')
    expect(winner2).toBe('Kent C. Dodds');

    utils.getWinner.mockRestore();
});


