/**
 * @module  audio-table/rectangle
 */

var pulse = require('./pulse');

module.exports = function rectangle (length) {
	return pulse(length, 0.5);
};