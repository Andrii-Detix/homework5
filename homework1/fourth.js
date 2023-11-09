function isPrimeNumber(num)
{
    if(num>=2)
    {
       if(num ===2)return true;
       if (num%2===0) return false;
       for (let i= 3; i<num; i+=2 )
       {

           if(num%i===0) return true;

       }

    }
    return true;
}

console.log(isPrimeNumber(9365476937));