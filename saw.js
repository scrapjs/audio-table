/**
 * @module audio-table/saw
 */

var triangle = require('./triangle');

module.exports = function saw (length) {
	return triangle(length, 0);
}