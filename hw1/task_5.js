function highAndLow(string){
    let numbers = string.split(" ");
    numbers = numbers.map((el)=>+el);
    let high = numbers[0];
    let low = numbers[0] ;
    numbers.forEach((el)=>{
        if(el > high){
            high = el;
        }
        if(el < low){
            low = el;
        }
    })
    return `${high} ${low}`

}
console.log(highAndLow('1 2 8 9'));
console.log(highAndLow("1 9 3 4 -5"));
console.log(highAndLow("1 2 -3 4 5"));
