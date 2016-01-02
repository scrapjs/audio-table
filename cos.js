/**
 * @module  audio-table/cos
 */

var pi2 = Math.PI * 2;


function cos (length) {
	var table = new Float32Array(length);
	var step = pi2 / length;
	var l2 = length / 2;

	for (var i = 0; i < l2; i++) {
		table[i+l2] = -Math.cos(-i * step);
		table[i] = Math.cos(i * step);
	}

	return table;
}


module.exports = cos;