// task 1 joining without + join or concat
const hello = "Hello";
const world = "World";

const helloworld = `${hello} ${world}`;
console.log(helloworld);

// task 2 multiply arrow function with second param default 1
const multiply = (first, second = 1) => first * second;
console.log(multiply(5, 7));
console.log(multiply(4));

// task 3 arrow function average with rest
const average = (...args) => {
  let sum = 0;
  args.forEach(arg => {
    sum += arg;
  });
  return sum / args.length;
};

console.log(`Average is ${average(1, 2, 3, 4, 5, 6)}`);

// task 4 average of an array
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Average of the grades is ${average(...grades)}`);

// task 5 destructurization
const data = [1, 4, "Iwona", false, "Nowak"];
const [, , firstname, , lastname] = data;
console.log(firstname);
console.log(lastname);

// -------------------------------------------------------------------------
// script from 15.4
const sayHello = () => alert("Hello world!");
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
