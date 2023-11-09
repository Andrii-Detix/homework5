function highAndLow(numberString)
{
    let minValue = null;
    let maxValue = null;

    for (let i=0, charNumber = null;i<numberString.length;i++)
    {
        if(numberString[i]!==" ")
        {
            if (minValue ===null || maxValue === null)
            {
                minValue = numberString[i];
                maxValue = numberString[i];
            }
             if(charNumber === null) charNumber=numberString[i];
             else charNumber+=numberString[i];
         }
        else
        {
            charNumber = Number(charNumber);
            if (charNumber>maxValue) maxValue=charNumber;
            if (charNumber<minValue) minValue = charNumber;
            charNumber = null;
        }
    }
    if (minValue ===null || maxValue === null) return `Error: string has not number`;
    else return `${maxValue} ${minValue}`;
}

console.log(highAndLow("        "));
