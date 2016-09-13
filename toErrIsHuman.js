var test = require('tape');
var toErr = require(process.argv[2]);

test('toErr', function(t){
	t.plan(4)
	t.equal(toErr('food', 'chocolate'));
	t.throw(toErr.bind(null, 'chocolate'))
})