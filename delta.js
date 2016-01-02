/**
 * @module  audio-table/delta
 */

module.exports = function delta (length) {
	var table = new Float32Array(length);
	table[0] = 1;
	return table;
};