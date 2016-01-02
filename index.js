/**
 * @module  audio-table
 */


module.exports = {
	sin: sin,
	cos: cos,
	saw: saw,
	triangle: triangle,
	square: square,
	delta: delta,
	pulse: pulse,
	noise: noise,
	// wave: require('./wave')
	// scale: require('./scale')
	fill: fill
};


var pi2 = Math.PI * 2;


function noise (arg) {
	return fill(arg, function (val) {
		return Math.random() * 2 - 1;
	})
};


function triangle (arg, scale) {
	if (scale == null) scale = 0.5;

	return fill(arg, function (val, i, data) {
		var l = data.length;
		var l2 = l / 2;
		var l2scale = l2 * scale;

		if (i < l2scale) return i / l2scale;
		if (i < l - l2scale) return 1 - (i - l2scale) * 2 / (l - l2);
		return 1 - (i - l - l2scale) / (l - l - l2scale);
	});
};


function cos (arg, wavenumber) {
	if (wavenumber == null) wavenumber = 1;

	return fill(arg, function(val, i, data) {
		return Math.cos(Math.PI * 2 * wavenumber * i / data.length)
	});
};


function sin (arg, wavenumber) {
	if (wavenumber == null) wavenumber = 1;

	return fill(arg, function(val, i, data) {
		return Math.sin(Math.PI * 2 * wavenumber * i / data.length)
	});
};


function delta (arg) {
	return fill(arg, function(val, i, data) {
		return i === 0 ? 1 : 0;
	});
};


function pulse (arg, weight) {
	if (weight == null) weight = 0;

	return fill(arg, function(val, i, data) {
		return i < Math.max(data.length * weight, 1) ? 1 : -1;
	});
}


function square (arg) {
	return pulse(arg, 0.5);
};


function saw (arg) {
	return fill(arg, function(val, i, data) {
		return 1 - 2 * i / (data.length - 1);
	});
};


/**
 * Fill passed array or create array and fill with the function
 * From the start/end positions
 */
function fill (arg, fn, start, end) {
	var table = getList(arg);

	if (start == null) start = 0;
	else if (start < 0) start += table.length;
	if (end == null) end = table.length;
	else if (end < 0) end += table.length;

	for (var i = start; i < end; i++) {
		table[i] = fn(table[i], i, table);
	}

	return table;
};


function getList (arg) {
	if (!arg) throw Error('Cannot create undefined wavetable. Please, pass the number or Array')
	if (arg.length != null) return arg;
	else return new Float32Array(arg)
};