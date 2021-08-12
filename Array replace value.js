/*
*Replace Array by seach Value and replace with other number or string
*author : Alamin hossain
*Date: 12/08/21
 */

function replaceArray(arr,searchToreplace,replaceValue) {
    arr.forEach((element,index) => {
        if( element === searchToreplace) {
            arr[index]=replaceValue;
        }
    });
    console.log(arr);
}

let arr = ['Mango','Orange','Apple','Banana'];
// I want to change Apple with Guava
replaceArray(arr,'Apple','Guava');


let a=[1,2,3,4,5,6,6,4,5,2,5,6,5]
replaceArray(a,6,'change');