// kono ekta parameter na dile result NaN ashe
function add(num1 , num2){
    return num1 + num2;
}

const total = add(25)
// console.log(total);

// parameter miss hoile onekei je upay khatay
function add2(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2
}
const total2 = add2(15)
console.log(total2);

// another upay
function add3(num1, num2){
    num2 = num2 || 20;                // akhane 20 er bodol a 0 dite paro ... ja iccah like default value set korlei holo
    return num1 + num2
}
const total3 = add3(5)
console.log(total3);


// Parameter na dite caile Javascript default value deyar upay
function add4(num1 , num2 = 10){
    return num1 + num2;
}

const total4 = add4(25)
console.log(total4);

// life motto
if(sad() === true{
    sad().stop();
    beAwesome();
}



