var VideoPlayer = function () {
    this.fallback = function(url){ window.location = url; };
}
/**
 * Starts the video player intent
 *
 * @param url           The url to play
 */
VideoPlayer.prototype.play = function(url) {
    this.fallback(url);
};


module.exports = new VideoPlayer();


