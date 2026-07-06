class Car{
    constructor(brand, model,year){
        this.brand=brand;
        this.model=model;
        this.year=year
    };
    getInfo(){
        console.log(`${this.brand} ${this.model} (${this.year})`)
    }
};

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    introduce(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`)
    }
};

class Student extends Person{
    constructor(name,age,course){
        super(name,age);
        this.course=course
    };
    introduce(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old and my course is ${this.course}`)
    }
}
