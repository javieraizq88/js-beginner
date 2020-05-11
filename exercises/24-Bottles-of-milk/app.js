var person = {
    name: "John",                    //String
    lastname: "Doe",
    age: 35,                         //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2       //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};


var family = {
    lastname: "Doe",
    members: [person, person2]       //Array of objects, don't forget to add Jimmy
};

//1. Change the fourth lucky number of John Doe to 33
person.lucky_numbers[3] = 33;

//2. Create a new person and add it to the family object
var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
};

family.members.push(person3);

//3. Now please print ( console.log() ) the SUM of all of the lucky numbers of the Doe family.

function addAllFamilyLuckyNumbers(doeFamily){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  
  for(var i =0; i < doeFamily.members.length ; i++){
      for(var j=0; j < doeFamily.members[i].lucky_numbers.length ; j++){
      
      sumOfAllLuckyNumbers += doeFamily.members[i].lucky_numbers[j];
    }
    
  }
  
  return sumOfAllLuckyNumbers;
}

console.log(addAllFamilyLuckyNumbers(family)); 
