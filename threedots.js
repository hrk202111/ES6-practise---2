const ages = [15, 16, 17, 18];
const ages2 = [20, 21, 22, 24];
const ages3 = [12, 13, 14]
const allAges = ages.concat(ages2).concat([200]).concat(ages3)    // hardest and not clean this code

// spread parameter or three dots
const allAges2 = [...ages, ...ages2, 5,200, 15, 65, 25, 85, ...ages3,] // easy and clean code
// console.log(allAges2);

const businessman = 1150;
const minister = 850; 
const shocib = 700;
// const maximum = Math.max(businessman, minister, shocib)
const takaPoysha = [950, 850, 500]
const takaPoysha2 = [businessman, minister, shocib]
// const maximum = Math.max(...takaPoysha)
const maximum = Math.max(...takaPoysha2)
console.log(maximum);