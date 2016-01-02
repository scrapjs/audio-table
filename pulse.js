/**
 * @module  audio-table/pulse
 */

module.exports = function pulse (length, weight) {
	if (weight == null) weight = 0;

	var table = new Float32Array(length);

	var mid = Math.max(Math.ceil(weight * length), 1);

	table.fill(1, 0, mid);
	table.fill(-1, mid);

	return table;
}