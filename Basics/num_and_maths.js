const score = 400
console.log(typeof score);


const balance = new Number(100)
console.log(balance);


console.log(score.toString().length)
console.log(score.toFixed(2))// after decimal values 

const OtherNumber = 45.7955;
console.log(OtherNumber.toPrecision(3));

const hunderds = 100000000000
console.log(hunderds.toLocaleString('en-IN'));


// ********************************************** MATHS ****************************************************************

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.98));
console.log(Math.sqrt(49));
console.log(Math.min(4,5,3,8,1,9));
console.log(Math.max(4,5,3,8,1,9));



//Random Method
console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10)+ 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


