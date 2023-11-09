function findNB(totalVolume)
{

  let buildNumber ;
  let leftVolume = totalVolume;
  for (let i = 1; leftVolume >0; i++)
  {
      leftVolume -= i**3;
      buildNumber = i;
  }
  if (leftVolume===0) return buildNumber;
  else return -1;

}



const totalVolume = Number(prompt());
alert(findNB(totalVolume));
