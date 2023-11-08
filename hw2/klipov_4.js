function unpackSausages(truck) {
    let result = [];
    truck.forEach((box) => {
        box.forEach((pack) => {
            if (pack.startsWith('[') && pack.endsWith(']') && pack.length === 6) {
                result.push(pack.slice(1, -1))
                for (let i = 0; i < result.length; i++) {
                    if (result[i][0] !== result[i][1]
                        || result[i][0] !== result[i][2]
                        || result[i][0] !== result[i][3]
                        || result[i][1] !== result[i][2]
                        || result[i][1] !== result[i][3]
                        || result[i][2] !== result[i][3]){
                        result.splice(i, 1)

                    }
                }
            }
        })
    })
    for(let i = 1; i < result.length; i++){
        if(i % 4 === 0 ){
            result.splice(i,1)
        }
    }
    return result.join(',').replaceAll(',','').replaceAll('',' ').trim();
}


console.log(unpackSausages([["[IIII]", "[llll]", "[1111]", "[@@@@]", "[||||]", "[║║║║]"]]))