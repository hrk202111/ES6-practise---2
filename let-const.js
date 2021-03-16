const hubby = 'Karim';
// hubby ='joshim'          // change kora jabe na
console.log(hubby);


// array and object er Element modify kora jabe ... tobe purota change kora jabe na _________
const result = [85, 65, 77, 95, 88]
result [2] = 100;
result.push(200);
// purota change kora jabe na  
// result = [20, 25, 65, 85, 41]
// result = ['josim', 'karim','sakib']
console.log(result);

 // object
const actor = {name:'sharukh Khan', phone:015422684};
actor.name = 'Dewane Johnson'
actor.contact = 'dewanejhonson.com'

// tobe purota change kora jabe na           
// actor = {name: 'salman khan', phone:0254235}
console.log(actor);

// let var er motoi shudhu leak hobe na...like leakproof
let patientName = 'Fatema Khala';
patientName = 'Rahim Chacha'
let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
    console.log(i);
}




