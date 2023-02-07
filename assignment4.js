// problem-1
//this function will be work for exact value which is change multiple time its variable
//firstly put a random number then multiply 3 then add 10 and divide 2 finally remove 5.
function mindGame(number){
    if (typeof number != 'number') {
        return "Please enter a  number";
    }

    const x =number*3; 
     
    const y =x+10;
  
    const z =y/2;
    
    const exactNumber = z-5;
   
    return exactNumber;
}

// problem-2
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
 
//  problem-3
// This function work for a random number which is difference 7 .if difference value less than 7 .then return difference value.otherwise return random number multiply 2; 
function isLGSeven(number){
    if (typeof number != 'number') {
        return "Please enter a  number";
    }
    const X =number-7;
     
    if(X<7){
        return X;
    }else{
        return 2*number;
    }
    }

    // problem-4

    // this function work for sort an array and count  BadData which is less than 0
    function findingBadData(arr){
        if(!Array.isArray(arr)){
            return "enter an array"
        }
        
        let err=[];
        
         
            for(let i =0;i<arr.length;i++){
                const index=i;
                const element =arr[index];
                
                // must be input an array.then will be return correct result
                if(element<0){
                    err.push(element)
                }
        
           
        }
        return  err.length ;
       
     
            
    }
// problem-5
// this function work for converting gems to diamond .It has three parameter and check  the value in a number and return conditionally total diamonds less than or greater than 2000;

function gemsToDiamond(gems1,gems2,gems3){
    const diamond1=gems1*21;
    const diamond2=gems2*32;
    const diamond3=gems3*43;
    // input any number in three parameters .if input any string or array that will be undefined
    const totalDiamond =diamond1+diamond2+diamond3;
    if(totalDiamond>2000){
        const diamond=totalDiamond-2000;
        return diamond;
    }else if(totalDiamond<=2000){
        return totalDiamond;
    }
    
}