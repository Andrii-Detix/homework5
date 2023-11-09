class Vector{
    _coordinates;
    _numberOfElements;

    constructor(coordinates){
        this._coordinates=coordinates;
        this._numberOfElements= coordinates.length;
    }
    _isEqualSize(otherVector){
        if(this._numberOfElements !== otherVector._numberOfElements){
            throw Error("Oh, fuck. Vectors haven't equal size!");
        }
    }
    toString(){
        return '(' + this._coordinates.join(",") + ')';
    }
    equals(otherVector){
       return this.toString() === otherVector.toString() ? true : false;
    }
    add(otherVector){
        this._isEqualSize(otherVector);
        let temporaryArray = new Array();
        for (let i =0; i< this._numberOfElements; i++){
            temporaryArray[i] = this._coordinates[i]+otherVector._coordinates[i];
        }
        return new Vector(temporaryArray);
    }
    subtract(otherVector){
        this._isEqualSize(otherVector);
        let temporaryArray = new Array();
        for (let i =0; i< this._numberOfElements; i++){
            temporaryArray[i] = this._coordinates[i]-otherVector._coordinates[i];
        }
        return new Vector(temporaryArray);
    }
    dot(otherVector){
        this._isEqualSize(otherVector);
        let result = 0;
        for (let i =0; i<this._numberOfElements; i++) result+= this._coordinates[i]*otherVector._coordinates[i];
        return result;
    }
    norm(){
        let result = 0;
        for(const coordinate of this._coordinates) result+=coordinate**2;
        return Math.sqrt(result);
    }
}
