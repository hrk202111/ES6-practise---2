// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function(num){
//     return num*2
// }

// const doubleIt = function myfun(num){
//     return num*2
// }

const doubleIt = num => num * 2
const add = (num1 , num2) => num1 + num2 
const add3 = (x, y, z = 10) => x + y + z
const give2 = () => 5
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff
    return result;
}

const result = add3(10, 25)
const result5 = doMath(7, 5) 
console.log(result5);