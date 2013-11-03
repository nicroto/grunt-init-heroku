/*
 * Sample test suite for the sample-{%= name %} module (sample-{%= name %}-module.js).
 * Mocha assertions reference: http://visionmedia.github.io/mocha/#assertions
 */
 
var assert = require("assert");
var {%= js_test_safe_name %} = require('../src/custom-modules/sample-{%= name %}-module.js');

describe('{%= name %}', function(){
	describe('awesome()', function(){
		it('should be awesome', function(){
			assert.equal('awesome', {%= js_test_safe_name %}.awesome());
		});
	});
});