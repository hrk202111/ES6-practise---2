class Parent{
    constructor(){
        this.fatherName = "Schwerznegger" 
    }
}

class Child extends Parent{
    constructor(name){
        super()                          // super parameter ata na dile code wrong dekhabe
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName
    }
}

const baby = new Child('Tom')
const baby2 = new Child('Donald')

console.log(baby.getFullName());
console.log(baby, baby2);