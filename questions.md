* Should we pass start/end arguments?
	* ✔ No. That complicates arguments, if there are any. Let user use subarrays.
* Should we extend it and call like audio-signal, or extend with modifier functions?
	* + It may be useful for audio-css props, like `scale(sine(), 2)`;
	* + fns like `invert`, `reverse`, `mix`, `scale`, `fill/transform`,
	* - It is a good point for a separate lib, not filler but manipulator