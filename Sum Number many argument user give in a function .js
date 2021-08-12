/*
*Sum Number many argument user give in a function  
*author : Alamin hossain
*Date: 12/08/21
*/


function sum (...arg){
    let total = 0;
    for(let item of arg){
        total += item;
    }
    return total;
}

console.log(sum(100,200,300,400));