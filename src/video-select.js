const utils = require('./utils');

function videoSelect(video1, video2) {
    const numberToWin = 2;
    let video1Wins = 0;
    let video2Wins = 0;

    while(video1Wins < numberToWin && video2Wins < numberToWin) {
        const winner = utils.getVideo(video1, video2);

        if (winner === video1) {
            video1Wins++;
        } else if (winner === video2) {
            video2Wins++;
        }
    }

    return video1Wins > video2Wins ? video1 : video2;
}

module.exports = videoSelect;