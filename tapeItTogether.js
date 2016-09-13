var test = require('tape');
var numbers = require(process.argv[2]);

test('isCoolNumber accepts only cool numbers', function (t) {
   t.equal(numbers(42), '42 should be cool');
   t.equal(numbers(42, true), '42 should be cool');
   t.equal(numbers(42, false), '42 should not be cool');
   t.end()
 })