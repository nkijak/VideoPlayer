var VideoPlayer = function () {};

/**
 * Starts the video player intent
 *
 * @param url           The url to play
 */
VideoPlayer.prototype.play = function(url) {
    window.location = url;
};


module.exports = new VideoPlayer();


