var bulletPosition = 3;

function spinChamber()
{
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
}

function fireGun()
{
  let position = spinChamber();
  if(bulletPosition == position)
    return true;
  else
    return false;
	//you code here
}

if(fireGun()) console.log('Keep playing :)');
else console.log('you are dead!');