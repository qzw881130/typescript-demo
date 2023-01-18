//tsconfig.json

// const person : string = "zhiwei";


// function test(name : any){
//     return name;
// }

// const var1 : string = ''; //strictNullChecks

interface Waiter{
    eat : boolean;
    say: () => {}
}

interface Teacher{
    eat: boolean;
    skill: () => {}
}

// function judgeWho(animal: Waiter | Teacher){
//     if(animal.eat){
//         (animal as Teacher).skill();
//     }else{
//         (animal as Waiter).say();
//     }
// }
// function judgeWhoTwo(animal: Waiter | Teacher){
//     if('skill' in animal) animal.skill();
//     else animal.say();
// }

// function add (a : string | number, b : string | number){
//     if(typeof a === 'string' || typeof b === 'string'){
//         return `${a}${b}`;
//     }
//     return a + b;
// }

// class NumberObj{
//     count: number = 0;
// }
// function addObj(a : object | NumberObj, b : object | NumberObj){
//     if(a instanceof NumberObj && b instanceof NumberObj){
//         return a.count + b.count;
//     }
//     return 0;
// }
