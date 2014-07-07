describe('test', function() {

	it('should works fine', function() {
		browser.get('http://todomvc.com/architecture-examples/angularjs/');
		expect(element.all(by.tagName('title')).count()).toBe(1);
	});
});