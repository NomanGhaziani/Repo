let message1 = "Hello World";//syntax error
console.log(message1);

let message2 = "Hello World";//type_error
console.log(message2);

let message = "Hello World";//assignability_error

console.log(message);

//strongly typed syntax
let a : string = "Pakistan";
a = "USA";
let b : number = 9;
let c : boolean = true;

//type inference
let e = "USA";
let f = 10.9;
f = 22;
let g = false;
g = true;

//use const where variable values do not change
const ab = 5;
const bb : number = 33;
const cb ="best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z

console.log("let: " + z);// Error: z is not defined in this scope
}
//step03a_modules
import a1 from "./first";
import { c2 as d} from "./second";

console.log(a + b + d);

//step03b_native_ECMAScript_module
import a2 from "./first.js";
import {b2, c2} from "./second.js";

console.log(a + b + c);



