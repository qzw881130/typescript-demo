class Person {
    // public name : string;
    constructor(public name : string){}
}

class Police extends Person {
    constructor(name : string, public age: number){
        super(name);
    }
}

// const p1 = new Person('lucy');
// console.log(p1.name);

const pol = new Police('zhiwei', 34);
console.log(pol.name, ',', pol.age);



