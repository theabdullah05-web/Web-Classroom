class Mammals{
    constructor(name){
        this.name= name;
        this.type="warm-blooded"
    }
    eat(){
        console.log("I am eating")
    }
};

class Dog extends Mammals{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("whoo....")
    }
};
class Cat extends Mammals{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow...")
    }
}