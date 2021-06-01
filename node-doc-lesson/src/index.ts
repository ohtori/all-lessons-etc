const assert = require('assert');

const tracker = new assert.CallTracker();

function func() {}

const callsfunc = tracker.calls(func, 1);

callsfunc();

process.on('exit', () => {
  tracker.verify();
});

