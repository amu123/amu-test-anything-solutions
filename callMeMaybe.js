vat test = require('tape');
var callMeBack = require(process.argv[2]);

test('callMeBack', function(t){

	t.plan(4)
	callMeBack(4, function(){
		t.pass('callMeBack')
	})
})