function getRootProperty(obj, num, isRecurtion=false){
    let result = null;
    let boolOfProporty;

    if(Array.isArray(obj))
    {
        for(let i =0; i<obj.length; i++){
            if(obj[i] === num)  return true;

        }
    }
    else{

        for(const proporty in obj)
        {

            if(isRecurtion===false)
                boolOfProporty =  getRootProperty(obj[proporty], num, true );
            else {
                let time = getRootProperty(obj[proporty], num, isRecurtion);
                if(time === true) return true;
                else continue;
            }

            if(boolOfProporty===true) {

                result =   `${proporty}`;
                break;
            }

        }
    }
    return result;
}








