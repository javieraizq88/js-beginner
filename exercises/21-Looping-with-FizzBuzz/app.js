function fizzBuzz() {  
	//your code here
	for(let i = 1; i<=100; i++){
	  
		if(i%3 != 0 & i%5 != 0) console.log(i);
	  if(i % 3 == 0) console.log("Fizz");
	  if(i % 5 == 0) console.log("Buzz");
	}
}

fizzBuzz();
