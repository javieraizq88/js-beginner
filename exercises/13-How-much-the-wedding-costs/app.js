

let userInput = prompt('How many people are coming to your wedding?');

// your code here

let number = userInput
if (number <= 50) price = 4000;
else if (number  <= 100) price = 10000;
else if (number <= 200) price = 15000;
else if (number > 200) price = 20000;

console.log('Your wedding will cost '+price+' dollars');


// OPCION 2
//
// let userInput = prompt('How many people are comming to your wedding?');
//
// var price = 0;
// // your code here
// if(parseInt(userInput) <= 50) price = 4000;
// else if(parseInt(userInput) <= 100) price = 10000;
// else if(parseInt(userInput) <= 200) price = 15000;
// else if(parseInt(userInput) > 200) price = 20000;
//
// console.log('Your wedding will cost '+price+' dollars');