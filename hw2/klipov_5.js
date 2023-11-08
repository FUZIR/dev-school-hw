function getRootProperty(object, val) {
    for(let prop in object){
        if (typeof object[prop] == "object") {
            if(getRootProperty(object[prop],val)){
                return prop;
            }
        }
        else{
            if(object[prop] == val){
                return prop;
            }
        }
    }
    return null;
}