"use strict";

// task 1 joining without + join or concat
var hello = "Hello";
var world = "World";

var helloworld = hello + " " + world;
console.log(helloworld);

// task 2 multiply arrow function with second param default 1
var multiply = function multiply(first) {
  var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return first * second;
};
console.log(multiply(5, 7));
console.log(multiply(4));

// task 3 arrow function average with rest
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });
  return sum / args.length;
};

console.log("Average is " + average(1, 2, 3, 4, 5, 6));

// task 4 average of an array
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log("Average of the grades is " + average.apply(undefined, grades));

// task 5 destructurization
var data = [1, 4, "Iwona", false, "Nowak"];
var firstname = data[2],
    lastname = data[4];

console.log(firstname);
console.log(lastname);

// -------------------------------------------------------------------------
// script from 15.4
var sayHello = function sayHello() {
  return alert("Hello world!");
};
sayHello();

var greeting = "Hello User!";
function greetWorld(isGreeting) {
  if (isGreeting) {
    // kod wykona się jeśli flaga isGreeting = true
    var greeting = "Hello World!"; // (A) zasięg: cała funkcja
    return greeting;
  }
  return greeting; // zadziała hoisting i greeting nie będzie tym czym się spodziewamy
}
greetWorld(false); // undefined
