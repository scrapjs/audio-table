/**
 * @module  audio-table/triangle
 */

module.exports = function (length, scale) {
	if (scale == null) scale = 0.5;

	var l = length;
	var l2 = length / 2;

	var table = new Float32Array(l);

	var from, i, to;

	for (from = 0, to = l2 * scale, i = from; i < to; i++) {
		table[i] = i/to;
	}
	for (from = to, to = l - scale * l2; i < to; i++) {
		table[i] = 1 - (i - from) * 2 / (to - from);
	}
	for (from = to, to = l; i < to; i++) {
		table[i] = - 1 + (i - from) / (to - from);
	}

	return table;
};