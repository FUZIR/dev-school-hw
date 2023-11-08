const number = 10;
let numberlist = [];
let result = 0;
for(let i = 0; i < number; i++){
    if (i%3 ===0 || i%5 ===0) {
        numberlist.push(i);
    }
}
numberlist.forEach((el)=>result+=el);
console.log(result)
// numberlist.forEach((el)=>console.log(el));
