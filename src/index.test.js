var expect = require('chai').expect;
var microlib = require("./index");


describe('microlib',function(){
  describe("all",function(){
    it("it should return a array of stings",function(){
      expect(microlib.all).to.satisfy(isArryOfStrings);
      function isArryOfStrings(array){
        return array.every(function(item){
          return typeof item === 'string';
        });
      }
    });

    it('should contains "a"', function () {
      expect(microlib.all).to.include("a");
    });
  });

  describe('random', function () {
    it('should return a single item from the array', function () {
      var randomItem = microlib.random();
      expect(microlib.all).to.include(randomItem);
    });
    it('should return the array of randomItem if passed a number', function () {
      var randomItem = microlib.random(4);
      expect(randomItem).to.have.length(4);
      randomItem.forEach(function(item){
        expect(microlib.all).to.include(item); 
      });      
    });
  });

});