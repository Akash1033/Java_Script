const account_number = 1234567890;
let account_balance = 1000.00;
var account_name = "John Doe"
accountcity = "Punjab"
let account_state; //underfined varible 

// account_number = 9876543221  not allowed because this is constant variable
account_balance = 0.0
account_name = "Akash Vohra"
accountcity = "Ludhiana"
console.log(account_number)
console.log(account_state)


// method to print multiple variable
console.table([account_balance, account_name, accountcity])

// prefer not to use var beacuse of issue in block scope and functional scope
