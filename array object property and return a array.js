 /*
*Array object propert and return a object
*author : Alamin hossain
*Date: 12/08/21
 */

 const persons=[
    {  
    id: 1001,
    name:'Alamin',
    age:20
    },
    {  
    id: 1002,
    name:'Rakib',
    age:22
    },
    {  
    id: 1003,
    name:'Jihad',
    age:24
    },
    {  
    id: 1004,
    name:'Naim',
    age:18
    },
    {  
    id: 1005,
    name:'Faruq',
    age:21
    }
 ];



 function objectToArray(arr){
     const newarray=[];
     for(let value of arr) {
         let text = "";
         for(let property in value) {
             text +=property +'  :   '+value[property]+"   ";
         }
         newarray.push(text);
     }
     return newarray;
 }
 console.log(objectToArray(persons));