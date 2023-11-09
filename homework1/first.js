let sum = (num)=> {
    if (num>= 0) {
        let result = 0;
        for (let i = 0; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0){
                result += i;

            }
        }
        return result;
    }
    else return 0;
}



let num = Number(prompt());
console.log(sum(num));
