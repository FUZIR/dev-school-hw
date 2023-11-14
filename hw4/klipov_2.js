class Vector{
    constructor(components) {
        this.components = components;
    }
    add(vector){
        let sumVector = [];
        if(this.components.length === vector.components.length){
            for(let i = 0; i < this.components.length; i++){
                sumVector.push(this.components[i]+vector.components[i]);
            }
            return new Vector(sumVector);
        }
        else throw new Error();
    }
    subtract(vector){
        let subVector = [];
        if(this.components.length === vector.components.length){
            for(let i = 0; i < this.components.length; i++){
                subVector.push(this.components[i]-vector.components[i]);
            }
            return new Vector(subVector);
        }
        else throw new Error();
    }
    dot(vector){
        let dotVector = [];
        if(this.components.length === vector.components.length){
            for(let i = 0; i < this.components.length; i++){
                dotVector.push(this.components[i]*vector.components[i]);
            }
            return dotVector.reduce((a,b)=>a+b);
        }
        else throw new Error();
    }
    norm(){
        let normVector = [];
        for(let i = 0; i < this.components.length; i++){
            normVector.push(Math.pow(this.components[i],2));
        }
        return new Vector(Math.sqrt(normVector.reduce((a,b)=>a+b)));
    }
    equals(vector) {
        if (vector === undefined || vector.components === undefined) {
            return false;
        }

        if (this.components.length !== vector.components.length) {
            return false;
        }

        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] !== vector.components[i]) {
                return false;
            }
        }

        return true;
    }
    toString(){
        return `(${Array.from(this.components).join(',')})`;
    }
}

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.subtract(b).equals(new Vector([-2, -2, -2])));