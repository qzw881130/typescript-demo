//private protected public
class Pers{
    //protected
    protected name : string = '';
    public sayHello(){
        console.log(this.name + ' say hello');
    }
}

class Sub extends Pers{
    public teach(){
        console.log(this.name + ' teach english');
        
    }
}

// const p1 = new Pers();
// p1.name = 'John';
// console.log(p1.name);
// p1.sayHello();

const s1 = new Sub();
// s1.name = 'zhiwei';
s1.teach();
