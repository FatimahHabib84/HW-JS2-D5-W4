//   ## Arrays
// create an array of characters that has these properties (name, height, gender, mass, eye color)
characters = [
    [
    "Luke Skywalker",
       177,
      "male",
      77,
    "brown",
    ],
    [
       "Leia Organa",
      160,
      "female",
       56,
       "blue",
    ],
    [
       "Han Solo",
      180,
      "male",
      80,
      "brown",
    ],
    [
       "Chewie",
      222,
      "male",
      190,
       "black",
    ],
    [
      "kevien",
      106,
       "male",
      32.2,
       "red",
    ],
  ];
  
//   ## MAP
// 1. Get array of all names only
names = Array()
characters.map((e)=>{
    names.push(e[0])
})
console.log(names)

// 2. Get array of all heights only
heights = Array()
characters.map((e)=>{
    heights.push(e[1])
})
console.log(heights)

// ## REDUCE
// 1. Get total height of all characters
const reduce = heights.reduce(
  (sum, indexVal) => sum + indexVal);
console.log(`sum of heights ${reduce}`);

// ## FILTER
// 1. Get characters with height less than 200
const heightLess200 = characters.filter((e)=>e[1]<200)
console.log(`people with heights less than 200 are:`);
console.log(heightLess200)
// 2. Get all male characters
const male = characters.filter((e)=>e[2]=="male")
console.log(`male are: `);
console.log(male);

// ## SORT
// 1. Sort by mass
sorteingByMassArray = characters.sort((a,b) => a[3] - b[3])
console.log("sorting people by mass: ");
console.log(sorteingByMassArray)
// 2. Sort by height
sorteingByHeightArray = characters.sort((a,b) => a[1] - b[1])
console.log("sorting people by height: ");
console.log(sorteingByHeightArray)

// ## EVERY
// 1. Does every character have mass more than 40?
const isMassMore40 = (e) => e[3]>40
console.log(`Does every character have mass more than 40? ${characters.every(isMassMore40)}`)
// 2. Is every character shorter than 200?
const isShorter200 = (e)=> e[1]<200
console.log(`Is every character shorter than 200? ${characters.every(isShorter200)}`);

// ## SOME
// 1. Is there at least one character with blue eyes?
const areThereBlueEye = (e) => e[4]=="blue"
console.log(`Is there at least one character with blue eyes? ${characters.some(areThereBlueEye)}`);
// 2. Is there at least one character taller than 210?
const isThereTaller210 = (e) => e[1]>210
console.log(`Is there at least one character taller than 210? ${characters.some(isThereTaller210)}`);