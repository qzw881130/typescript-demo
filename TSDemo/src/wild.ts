//泛型

function join<T>(a : T, b : T){
    return `${a}${b}`;
}

join<string>("hello", "world");
join<number>(111, 222);

//泛型数组使用
// function myFunc<Any>(params : Any[]){
//     return params;
// }
function myFunc<T>(params : Array<T>){
    return params;
}

myFunc<string>(["hello", "world"]);

//multi wild type
function join2<T, P>(a : T, b : P){
    return `${a}${b}`;
}
join2<string, number>('1', 2);

join2('hello', 333);

