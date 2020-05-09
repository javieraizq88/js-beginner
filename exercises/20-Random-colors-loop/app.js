function getColor(colorNumber=0)
{
	//making sure is a number and not a string
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
		case 4: return "green"; break;
		default: return "black"; break;
	}
}

function getAllStudentColors(){
  
	let arrayOfColors = [];
	for(let i = 0; i<10; i++){
	  let randomColor = Math.floor(Math.random() * 4) + 1;
	arrayOfColors.push(getColor(randomColor));
	}
	//your loop here
	return arrayOfColors;
}

console.log(getAllStudentColors());