/**
 * @module  audio-table/sin
 */

var pi2 = Math.PI * 2;


function sin (length) {
	var table = new Float32Array(length);
	var step = pi2 / length;

	for (var i = 0; i < length; i++) {
		table[i] = Math.sin(i * step);
	}

	return table;
}


module.exports = sin;