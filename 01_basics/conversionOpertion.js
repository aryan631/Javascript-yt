let score= true
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber=Number(score)
//console.log(valueInNumber)
//console.log(typeof(valueInNumber));

// "33"=>33
// "33abc"=> Nan
// true =>1;false =>0
let isLoggedIn=1
let BooleanIsLoggedIn=Boolean(isLoggedIn)
//console.log(x);
// 1=>true; 0=>false
// "" =>false
// "hitesh" =>true

let someNumber=33
let stringNumber=String(someNumber)
//console.log(stringNumber);
//console.log(typeof(stringNumber))

// **************************************OPERATIONS*****************************************
let value=3;
let negValue=-value;
//console.log(negValue)
//console.log(typeof(negValue));
//console.log(2+2)
//console.log(2*2);
//console.log(2/2);
//console.log(4%3);
//console.log(2**4);

let str1=1;
let str2=2;
let str3=str1+str2;
console.log(str3);

//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+2+2);
//console.log(1+2+"2");
//console.log((3+4)*5 %3)
let gameCounter=50;
gameCounter++;
console.log(gameCounter);

//Postfix Operator
let x=4;
const y=x++;
console.log(`x:${x},y:${y}`);
//if used postfix, with operator after operand(for example, x++)the increment operator increments
//and returns the value before incrementing
 let a=5;
 const b=++a;
 console.log(`a:${a},b:${b}`);