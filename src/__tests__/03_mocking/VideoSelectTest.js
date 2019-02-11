const videoSelect = require('../../video-select.js');
const utils = require('../../utils.js');


test('video 1 can be selected', function() {

    const v1 = 'video 1';
    const v2 = 'video 2';

    jest.spyOn(utils, 'getVideo');
    utils.getVideo.mockImplementation((v1, v2) => v1);

    const winner = videoSelect(v1, v2);
    expect(winner).toBe('video 1');
    expect(utils.getVideo).toHaveBeenCalledTimes(2);
    expect(utils.getVideo).toHaveBeenCalledWith(v1, v2);

    utils.getVideo.mockRestore();
});
//
// test('video 2 can be selected', function() {
//
//     jest.mock('../../utils', () => {
//         return {
//             getVideo: jest.fn((p1, p2) => p1)
//         };
//     });
//
//     const winner2 = videoSelect('video 1', 'video 2');
//     expect(winner2).toBe('video 2');
//
//     utils.getWinner.mockReset();
// });


