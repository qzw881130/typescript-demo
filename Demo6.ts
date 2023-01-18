const numberArr : number[] = [1,2,3];
const stringArr : string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
const undefinedArr : undefined[] = [undefined, undefined];
//!!!!!!!!!!!!!
const mixArr: (number|string|boolean|[])[] = ['A', 1, true, []];

//type alias 类型别名
type Lady = {name: string, age: number};
const girls : Lady[] = [
    {name: 'lucy', age: 15},
    {name: 'hanmeimei', age: 25},
];

class Madam{
    name: string; 
    age: number;
}
const girls2 : Madam[] = [
    {name: 'lucy', age: 15},
    {name: 'hanmeimei', age: 25},
];





