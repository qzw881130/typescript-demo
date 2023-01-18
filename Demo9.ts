interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline ?: number;
    [propname: string]: any;
    say(): string
}

class Women implements Girl{
    name = 'liin'
    age = 14
    bust = 90
    say(): string {
        return 'hi, i am' + this.name;
    }
}

interface WomenTeacher extends Girl {
    teach() : string;

}

const girl = {
    name: 'zhiwei',
    age: 15,
    bust: 94,
    waistline: 87,
    sex: 'female',
    say(){
        return 'hey';
    },
    teach(){
        return 'teach english';
    }
}

const screenResume = (girl : Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + ' is selected');
    (girl.age >= 24 || girl.bust < 90 )&& console.log(girl.name + ' is failed');
}

const getResume = (girl : WomenTeacher) => {
    console.log(girl.name + ' age is ' + girl.age);
    console.log(girl.name + ' bust is ' + girl.bust);
    girl.waistline && console.log(girl.name + ' waistline is ' +girl.waistline);
    girl.sex && console.log(girl.name + ' sex is ' + girl.sex);
    console.log(girl.say());
    
}

screenResume(girl);
getResume(girl);