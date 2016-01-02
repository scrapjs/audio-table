Collection of common periodic audio signals.

[![npm install audio-table](https://nodei.co/npm/audio-table.png?mini=true)](https://npmjs.org/package/audio-table/)

```js
var table = require('audio-table');

//get Float32Array of the length 1024 of the pure sine wave
var sin = table.sin(1024);
sin[0] === 1;
sin[1023] === 1;

//API
table.<waveshape>( list|length, args..., start?, end? );

//signals
table.sin(list|length, start?, end?);
table.cos(list|length, start?, end?);
table.noise(list|length, start?, end?);
table.delta(list|length, start?, end?);
table.pulse(list|length, start?, end?, dutyRatio);
table.rectangle(list|length, start?, end?); // table.pulse(list|length, 0.5);
table.triangle(list|length, start?, end?, scale);
table.saw(list|length, start?, end?); //table.triangle(length, 0);
```

## No’s

* Don’t pass start/end arguments — if user need to do that, let just use subarrays. Also it complicates arguments.


### Related

> [Periodic functions](https://en.wikipedia.org/wiki/List_of_periodic_functions) — list of periodic functions on wiki