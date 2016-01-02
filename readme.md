Collection of common periodic audio signals.

[![npm install audio-table](https://nodei.co/npm/audio-table.png?mini=true)](https://npmjs.org/package/audio-table/)

```js
var table = require('audio-table');

//get Float32Array of the length 1024 of the pure sine wave
var sin = table.sin(1024);
sin[0] === 0;
sin[256] === 1;
sin[512] === 0;

//API
table.<waveshape>( list|length, args... );

//signals
table.sin(list|length);
table.cos(list|length);
table.noise(list|length);
table.delta(list|length);
table.pulse(list|length, dutyRatio);
table.square(list|length); // table.pulse(list|length, 0.5);
table.triangle(list|length, scale);
table.saw(list|length); //table.triangle(length, 0);
```

### Related

> [audio-buffer-utils](https://npmjs.org/package/audio-buffer-utils) — same functions but for audio buffers.<br/>
> [Periodic functions](https://en.wikipedia.org/wiki/List_of_periodic_functions) — list of periodic functions on wiki.<br/>