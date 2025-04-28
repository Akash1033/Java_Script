const name = "Akash"
const repoCount = 50

// console.log(name + repoCount + " repository")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akash Vohra')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.bold());
console.log(gameName.fontsize());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.trim("Akash"));
console.log(gameName.indexOf("V"));
console.log(gameName.concat(" Singh"))

const newString =gameName.substring(0,5)
console.log(newString)

const anotherstring = gameName.slice(-10,10)
console.log(anotherstring)

const newStringOne = "   Akash   "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimStart())
console.log(newStringOne.trimEnd())


const URL ="https://www.akash.com/akash20%vohra";
console.log(URL.replace("20%" , ""));
console.log(URL.includes('akash'));


console.log(gameName.split(" "));
