// class Person{
//     public readonly _name : string;
//     constructor(name:string){
//         this._name = name;
//     }
// }

// const p1 = new Person('Lucy');
// p1._name = 'xxx';
// console.log(p1._name);

abstract class Girl{
    abstract skill();
}

class Waiter extends Girl{
    skill() {
        //difference work logic
        console.log('waiter!');
    }
}

class BaseTeacher extends Girl{
    skill() {
        console.log('BaseTeacher!');
        
    }
}

class seniorTeacher extends Girl{
    skill() {
        console.log('SeniorTeacher');
        
    }
}