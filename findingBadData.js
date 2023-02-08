// // this function work for sort an array and count invalid number which is less than 0
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
const array1 =   "sdfds";
 console.log(findingBadData(array1))
// //console.log("Bad Data :",invalidNumber3)

// function findingBadData(array) {
//     if (!Array.isArray(array)) {
//         return "Please enter an Array";
//     }

//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         const data = array[i];
//         if (data < 0) {
//             count++;
//         }
//     }
//     return count;
// }
// const array =2;
// console.log(findingBadData(array))