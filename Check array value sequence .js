

function chackSequence(arr){
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]){
            return false;
        } 
    }
            return true;  
    
}
console.log(chackSequence([1,2,3,6,8]));
console.log(chackSequence([1,2,1,6,8]));
console.log(chackSequence([1,2,3,6,8]));
console.log(chackSequence([1,2,3,6,8,10,22,1]));
console.log(chackSequence([1,2,3,6,8]));
