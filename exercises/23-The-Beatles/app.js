//Your code here!!
function sing()
{
	var lyrics = 'let it be';
	for(var i = 1; i<=9; i++)
	{
		lyrics = lyrics + ', let it be';
		if(i==3)
		{
			lyrics = lyrics + ', words of wisdom';
		}
		if(i==8)
		{
			lyrics = lyrics + ', there will be an answer';
			
		}
	}
	return lyrics;
	
}
console.log(sing());