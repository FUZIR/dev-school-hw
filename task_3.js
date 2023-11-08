function findNb(volume) {
    let flours = 0;
    while(volume > 0){
        flours++;
        volume = volume - flours**3;
    }
    if(volume < 0){
        return -1;
    }
    else{
        return flours;
    }
}
console.log(findNb(1071225))
console.log(findNb(91716553919377))
