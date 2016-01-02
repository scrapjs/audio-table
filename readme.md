Collection of periodic signal tables.

[![npm install audio-table](https://nodei.co/npm/audio-table.png?mini=true)](https://npmjs.org/package/audio-table/)

```js
var table = require('audio-table');

//get Float32Array of the length 1024 of the pure sine wave
var sin = table.sin(1024);
sin[0] === 1;
sin[1023] === 1;

//signals
table.sin(length);
table.cos(length);
table.noise(length);
table.delta(length);
table.pulse(length, dutyRatio);
table.rectangle(length); // table.pulse(length, 0.5);
table.triangle(length, scale);
table.saw(length); //table.triangle(length, 0);
```