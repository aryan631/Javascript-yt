// Primitive

// 7 Types :String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)
// Reference (Non Primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];

let myObj= {
    name:"hitesh",
    age:22,
}    

const myFunction =function(){
    console.log("Hello World");
}

//Return type of variables in Javascript
/* Primitive DataTypes
    Number =>number
    String=>string
    Boolean=>boolean
    null=>object
    undefind=>undefined
    Symbol=>symbol
    BigInt=>bigint

    2) Non Primitive datatypes
    Arrays=> objects
    Objects=>objects
    Function=>function*/
console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);

//STACK (Primitive) , Heap(Non-Primitive)

let myYouTubename="hiteshchoudhary.com"

let anothername=myYouTubename
anothername="chaiaurcode"
console.log(myYouTubename);
console.log(anothername);

let myUser={
    email:"user@gmaul.com",
    id:8721,
}

let myUser2=myUser
myUser2.email="dagger@gmail.com"
console.log(myUser.email);
console.log(myUser2.email);