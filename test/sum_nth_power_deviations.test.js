/* eslint no-shadow: 0 */
'use strict';

var test = require('tape');
var ss = require('../');

function rnd(x) {
    return Math.round(x * 1000) / 1000;
}

test('sumNthPowerDeviations', function(t) {
    t.equal(
        ss.sumNthPowerDeviations([0, 0, 0], 2),
        0);
    t.equal(
        ss.sumNthPowerDeviations([0, 1], 2),
        0.5);
    t.equal(
        ss.sumNthPowerDeviations([0, 1], 3),
        0);
    t.equal(
        ss.sumNthPowerDeviations([0, 1, 2], 2),
        2);
    t.end();
});
