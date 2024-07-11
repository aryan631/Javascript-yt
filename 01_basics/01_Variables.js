const accountId =14454;
let accountEmail="hitesh@google.com"
var accountPassword="12321"
accountCity="Jaipur"
//accountId=2
console.log(accountId);
/*
Prefer Not to Use Var
because of this issue in block scope and functional scope
*/
let accountState;

accountEmail="hc@hc.com"
accountPassword="2121343"
accountCity="Noida"

console.table([accountEmail,accountId,accountPassword,accountState])