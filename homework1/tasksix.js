function highNumber(num)
{
   num = String(num);
   let numArray = new Array(num.length);
   for (let i = 0; i<num.length;i++)
   {
       numArray[i] = num[i];

   }
   for (let i = 0; i<numArray.length-1;i++)
   {
       for (let j = i+1; j<numArray.length; j++)
       {
           if(numArray[i]< numArray[j])
           {
               let a = numArray[i];
               numArray[i] = numArray[j];
               numArray[j] = a;
           }
       }
   }
   num ="";
   for (let i = 0; i<numArray.length; i++)
   {
       num += numArray[i];
   }
    return Number(num);
}


