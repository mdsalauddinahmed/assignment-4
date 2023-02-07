
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
    // if input any string output will be NAN-->NOt a Number
    return exactNumber;
}
console.log(mindGame('work'))
console.log(mindGame(50))