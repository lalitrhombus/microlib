import  names from './names.json';
import uniqueRandomArray from 'unique-random-array';

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