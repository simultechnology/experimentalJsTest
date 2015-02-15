var assert = require("assert"),
    samples = require('../lib/samples');
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});

describe('samples', function () {
    describe('sum', function () {
        it('２つの引数の和を返す', function () {
            assert.equal(5, samples._test.sum(2, 3));
        })
    });
});