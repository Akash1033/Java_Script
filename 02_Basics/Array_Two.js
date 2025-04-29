const marvel_heros = [ "Thor", "Ironman", "Spiderman", "Captain America"];
const dc_heros =["Superman" , "Flash" , "Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);


// const joint_hero_family = marvel_heros.concat(dc_heros)
// console.log(joint_hero_family)

const allHeros = [...marvel_heros, ...dc_heros]
console.log(allHeros);


const anotherArray =[1,2,[7,6,8],4,9,2,[5,7,[2,4]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray)



console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));
console.log(Array.from({name : "hitesh"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

