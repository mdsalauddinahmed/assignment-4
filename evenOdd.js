// This function will count total character of string .then check total character number
// is even or odd
function evenOdd(str){

    if(typeof str!='string'){
        return "Please enter a string"
    }
    const randomWord =str.length;
    
    if(randomWord%2==0){
        return 'even'
       // console.log("even")
    }else{
        return 'odd';
        //console.log("odd")
    }
}
 
const inputWord1 = 23;
const inputWord2 = 'Batch76';
const inputWord3 = 'chatgpt';
console.log(evenOdd(inputWord1))
 
//console.log(evenOdd(inputWord2))
//console.log(evenOdd(inputWord3))