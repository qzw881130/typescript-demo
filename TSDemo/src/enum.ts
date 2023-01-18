
// function getServe(status : number){
//     if(status === 0){
//         return 'case1';
//     }else if(status === 1){
//         return 'case2';
//     }else if(status === 2){
//         return 'case3';
//     }
// }

// const Status = {
//     CASE1 : 0,
//     CASE2 : 1,
//     CASE3 : 2,
// }

enum Status{
    CASE1 = 1,//start from 1
    CASE2,
    CASE3
}

function getServe(status : any){
    if(status === Status.CASE1){
        return 'case1';
    }else if(status === Status.CASE2){
        return 'case2';
    }else if(status === Status.CASE3){
        return 'case3';
    }
}

console.log(Status);

console.log(Status.CASE1, Status[1]);


// const res = getServe(Status.CASE2)
// console.log(res);
