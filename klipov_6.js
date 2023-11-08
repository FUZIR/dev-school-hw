function landPerimeter(arr) {
    function getPer(row,col){
        let per = 4;
        if(row > 0 && arr[row-1][col] === "X"){
            per--;
        }
        if(row < arr.length-1 && arr[row+1][col] === "X"){
            per--;
        }
        if(col > 0 && arr[row][col-1] === "X"){
            per--;
        }
        if(col < arr[0].length && arr[row][col+1] === "X"){
            per--;
        }
        return per;
    }
    let perimeter = 0;
    for (let row = 0; row < arr.length; row++){
        for (let col = 0; col < arr[0].length; col++) {
            if(arr[row][col] === "X"){
                perimeter+= getPer(row,col);
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}
console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]))