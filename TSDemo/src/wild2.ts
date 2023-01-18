// class SelectGirl{
//     constructor(private girls: string[] | number[]){

//     }
//     getGirl(index: number): string | number{
//         return this.girls[index];
//     }
// }

// const selectGirl = new SelectGirl(['lucy', 'news', 'hamei', 'wangli']);
// console.log(selectGirl.getGirl(1));



// class SelectGirl<T>{
//     constructor(private girls: T[]){}
//     getGirl(index: number): T{
//         return this.girls[index];
//     }
// }
// const selectGirl = new SelectGirl<string>(['lucy', 'news', 'hamei', 'wangli']);
// console.log(selectGirl.getGirl(1));


// interface Girl{
//     name: string;
// }
// class SelectGirl<T extends Girl>{
//     constructor(private girls: T[]){}
//     getGirl(index: number): string{
//         return this.girls[index].name;
//     }
// }
// const selectGirl = new SelectGirl([
//     {name: 'John'},
//     {name: 'lucy'},
//     {name: 'hanmi'},
// ]);
// console.log(selectGirl.getGirl(1));


//泛型的约束
class SelectGirl<T extends number | string>{
    constructor(private girls: T[]){}
    getGirl(index: number): T{
        return this.girls[index];
    }
}
const selectGirl = new SelectGirl(['lucy', 'news', 'hamei', 'wangli']);
console.log(selectGirl.getGirl(1));