/*  premitive datatype
    :  they are call by value
      original data is not given the copy of the data is given and changes applied on that copy.
STRING,NUMBER,BOOLEAN,NULL,UNDEFINED, SYMBOL,BIGINT


*/
const score = 200;
const scorevalue = 200.44
const boolval = true
const nulex = null
let hello;
const id = Symbol('123') // symbol datatype 
const anotherid = Symbol('123')

const  bignum = 5785765874687653445463563567567n   //bigint
// console.log(bignum);
// console.log ( id === anotherid)





/*
    non primitive datatype & Reference datatype: referenece can be allocated in memory for these datatypes

ARRAY,OBJECTS,FUNCTIONS

*/

//Arrays in js

const heros = ["Saktiman", "nagraj" , "Thor","FLying jatt"]
const villian = ["killvish", "tatya bichu" , "doctor doom"]

// console.log([heros]+villian);
let obj  = 
{
    name:"vinay",   //object creation
    age: 22,
}
// console.log(obj.name);


const myfunction =  function vi(){          // function declaration and storing it in variable
return "hey baby";
}
// console.log(myfunction())


//  ************memory***************

// Stack  and heap memory

// Stack (primmitive)   copy of variable is created and used further

// Heap (non priitive type)   reference of the variable is created any change will affect the original value

let myname = "vini"

let anothername = myname
anothername = "ishu"

console.log(myname);
console.log(anothername);


let obj1 = {
    email: "Vini.com",
    money: 20000
}
let obj2;
obj2 = obj1
console.log(obj1)

