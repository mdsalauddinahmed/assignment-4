// recursion \
// let sum =0;
// for(let i=0;i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum)
// let sum =0;
// for(let i=5;i>=1;i--){
//     sum=sum+i;
// }
// console.log(sum)

// recursion by function

// function sum(n){
//     if(n==1){
//         return 1
//     }
//     return n+sum(n-1);
    
// }
// console.log(sum(5))

// factorial using recursion by loop
let factorial =1;
for(let i=1;i<=5;i++){
    factorial =factorial*i;
     console.log(factorial) ;
}  



// function factorial(n){
//     if(n==1){
//         return 1
//     }
//     return n*factorial(n-1);
// }
// const fac = factorial(5)
// console.log(fac)