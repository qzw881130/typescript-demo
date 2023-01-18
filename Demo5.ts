// function getTotal(a : number, b : number) : number {
//     return a + b;
// }

// const total1 = getTotal(1, 2);

// function sayHello() : void{
//     console.log('hello world');
// }

// function errorFunction() : never{
//     throw new Error('this is error');
//     console.log('never run');
// }

// function forNever() : never{
//     while(true){

//     }
//     console.log('......');
    
// }

// function add({a, b} : {a: number, b: number}){
//     return a + b;
// }

// const total1 = add({a: 1, b: 2});

function getNumber({a} : {a: number}){
    return a;
}

const a = getNumber({a: 1});



