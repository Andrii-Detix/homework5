function largestRadialSum(arr, d) {
    let maxHonor = "no honor";
    for (let i = 0; i<(arr.length/d); i++)
    {
        let a =0;
        for (let j = i;j<arr.length; j+=(arr.length/d))
        {
            a +=arr[j];
        }
        if(maxHonor === "no honor") maxHonor = a;
        if(a>maxHonor) maxHonor = a;
    }
    return maxHonor;
}


