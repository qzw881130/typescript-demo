// class Girl{
//     constructor(private _age : number){}

//     get age(){
//         return this._age + 20;
//     }
//     set age(age: number){
//         this._age = age + 1;
//     }
// }

// const g1 = new Girl(12);
// g1.age =  10;
// console.log(g1.age);

//static
class Girl{
    static sayLove(){
        return 'I love you';
    }
}

// const g2 = new Girl();
// console.log(g2.sayLove());

console.log(Girl.sayLove());

