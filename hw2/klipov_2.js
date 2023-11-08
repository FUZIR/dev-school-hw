function rightleftsum(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    while (i < arr.length) {
        sum1 = 0;
        sum2 = 0;
        let l = arr.slice(0, i);
        l.forEach((el) => sum1 += el);
        let l2 = arr.slice(i + 1, arr.length);
        l2.forEach((el) => sum2 += el);
        if (sum1 === sum2) {
            return i;
        }
        i++
    }
}
console.log(rightleftsum([1,2,3,4,3,2,1]))
console.log(rightleftsum([1,100,50,-51,1,1]))
console.log(rightleftsum([20,10,-80,10,10,15,35]))