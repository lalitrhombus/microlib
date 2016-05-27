var names =  require("./names.json");
var uniqueRandomArray = require("unique-random-array");
var generateRandomNumber = uniqueRandomArray(names);

module.exports = {
  all: names,
  random: random
};


function random(number){
  if(number === undefined){
    return generateRandomNumber();
  }
  else{
    var randomItems = [];
    for(var i=0;i<number;i++){
      randomItems.push(generateRandomNumber());
    }
    return randomItems;
  }
}