"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message1 = "Hello World"; //syntax error
console.log(message1);
var message2 = "Hello World"; //type_error
console.log(message2);
var message = "Hello World"; //assignability_error
console.log(message);
//strongly typed syntax
var a = "Pakistan";
a = "USA";
var b = 9;
var c = true;
//type inference
var e = "USA";
var f = 10.9;
f = 22;
var g = false;
g = true;
//use const where variable values do not change
var ab = 5;
var bb = 33;
var cb = "best";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    var z = 4;
    //use z
}
else {
    var z = "string";
    //use z
    console.log("let: " + z); // Error: z is not defined in this scope
}
var second_1 = require("./second");
console.log(a + b + second_1.c2);
console.log(a + b + c);
