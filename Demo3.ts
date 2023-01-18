const count : number = 30;
const name: string = 'john';
//null, undefined, boolean, void , symbol, string

const person: {
    name: string,
    age: number,
} = {
    name: 'zhiwei',
    age: 35
}

const person_more: string[] = ['lili', 'jim', 'lucy']
console.log(person_more);

class Person{}
const zhiwei: Person = new Person();

const callback :()=>string = ()=> {return 'hello';};
console.log(callback());
//Object / Array /Class /Arrow function


