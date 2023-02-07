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
console.log(isLGSeven("fjdkf"))
console.log(isLGSeven(-15))
console.log(isLGSeven(15))