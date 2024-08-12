const helloWorld = require('./helloWorld');

describe('Hello world', function () {
	test('says: "Hello, World!', function () {
		expect(helloWorld()).toEqual('Hello, World!');
	});
});
