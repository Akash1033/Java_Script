
// var c= 300
let a =300
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(a)
}
// console.log(a)
// console.log(b)
// console.log(c)


// nested Scope
function one(){
    const username= "Akash"

    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
    
    two()
    
}
// one()

if(true){
    const username ="AkashVohra"
    if(username=== "AkashVohra"){
        const website = "  youtube"
        // console.log(`${username}${website}`);
    }
    // console.log(website)
}
// console.log(username)


// **********************************Interesting********************************************

console.log(addone(5))
function addone(num){
    return num+1
}


const addTwo = function (num){
    return num +2
}
console.log(addTwo(10))
