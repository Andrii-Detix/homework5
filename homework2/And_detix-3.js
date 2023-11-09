function groupAnagrams(arr)
{
    let resultArray = new Array();
    for(let thisWordIndex = 0; thisWordIndex < arr.length; thisWordIndex++)
    {
        let timeArray = new Array();
        timeArray.push(arr[thisWordIndex]);
        if(thisWordIndex<arr.length)
        {
            for(let otherWordIndex = thisWordIndex +1; otherWordIndex<arr.length;) {
                let equalLeters = 0;
                if(arr[thisWordIndex].length!==arr[otherWordIndex].length)
                {
                    otherWordIndex++;
                    continue;
                }
                for (let leterIndex = 0; leterIndex < arr[thisWordIndex].length; leterIndex++) {
                    let countLeters1 = 0;
                    let countLeters2 = 0;

                    for (let timeIndex = 0; timeIndex < arr[thisWordIndex].length; timeIndex++) {
                        if (arr[thisWordIndex][leterIndex] === arr[thisWordIndex][timeIndex]) countLeters1++;
                    }

                    for (let timeIndex = 0; timeIndex < arr[otherWordIndex].length; timeIndex++) {
                        if (arr[thisWordIndex][leterIndex] === arr[otherWordIndex][timeIndex]) countLeters2++;
                    }

                    if (countLeters1 !== countLeters2) {
                        break;
                    }

                    equalLeters++;

                }

                if (equalLeters === arr[thisWordIndex].length) {
                    timeArray.push(arr[otherWordIndex]);
                    arr.splice(otherWordIndex, 1);

                } else {
                    otherWordIndex++;
                }

            }
        }
        resultArray.push(timeArray);
    }
    return resultArray;
}