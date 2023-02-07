// this function work for converting gems to diamond .It has three parameter and check the 
// the value in a number and return conditionally total diamonds less than or greater than 2000;

function  gemsToDiamond(gems1,gems2,gems3){
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
//console.log(gemsToDiamond(q,b,1))
console.log(gemsToDiamond(20,200,50))
console.log(gemsToDiamond(100,5,1))