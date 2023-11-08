function largestRadialSum(arr , d){

    let sumarray = [];

    if(arr.length === 1) {
        return arr[0];
    }
    if(arr.length % d === 0){
        for (let j = 0; j < arr.length; j++){
            let sum = 0;
            for(let i = j; i < arr.length; i+=(arr.length / d)){
                sum+=arr[i];
                sumarray[j] = sum;
                sumarray.length = arr.length/d;

            }
        }
    }
    else return -1;


    return sumarray.sort((a,b)=> b-a)[0];

}
console.log(largestRadialSum([-8,10,32,12], 1));
console.log(largestRadialSum([9,10,2], 3))