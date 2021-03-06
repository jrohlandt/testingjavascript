// Returns the winning player or null for a tie.
// Let's pretend that this function isn't using Math.random but instead it
// is making a call to some third party service that we can't test (or want to call each time), so
// instead we mock it.
function getVideo(video1, video2) {
    const winningNumber = Math.random();
    return winningNumber < 1 / 3
        ? video1
        : winningNumber < 2 / 3
            ? video2
            : null;
}

module.exports = {getVideo};