# JavaScript for React Revision

Here are the important JavaScript topics you would need to revise to excel in React:

1. **ES6 Features:**

   - `let`, `const`: Block-scoped variables

   ```javascript
   let name = "John";
   name = "Mike"; // This is fine

   const age = 30;
   age = 31; // Error, can't reassign a const
   ```

   - Arrow functions: They have a shorter syntax compared to function expressions and lexically bind the `this` value.

   ```javascript
   const greet = () => "Hello, world";
   console.log(greet()); // "Hello, world"
   ```

   - Template Literals: Used for string interpolation and multi-line strings.

   ```javascript
   let name = "John";
   console.log(`Hello, ${name}`); // "Hello, John"
   ```

   - Destructuring assignment: Allows you to unpack values from arrays, or properties from objects, into distinct variables.

   ```javascript
   let [first, , third] = ["red", "yellow", "green"];
   console.log(first, third); // "red", "green"
   ```

   - Rest and Spread Operator: Used to manage arrays or objects.

   ```javascript
   let array1 = [1, 2, 3];
   let array2 = [...array1, 4, 5]; // Spread operator
   console.log(array2); // [1, 2, 3, 4, 5]

   function sum(a, b, ...args) {
     // Rest parameter
     console.log(args); // [3, 4, 5]
   }
   sum(1, 2, 3, 4, 5);
   ```

   - Classes: Provides a much simpler and clearer syntax to create object and deal with inheritance.

   ```javascript
   class Car {
     constructor(brand) {
       this.brand = brand;
     }
     present() {
       return `I have a ${this.brand}`;
     }
   }
   let myCar = new Car("Ford");
   console.log(myCar.present()); // "I have a Ford"
   ```

   - Modules: A way to export and import functions, objects, or values from modules.

   ```javascript
   // lib.js
   export const sqrt = Math.sqrt;
   export function square(x) {
     return x * x;
   }
   export function diag(x, y) {
     return sqrt(square(x) + square(y));
   }

   // main.js
   import { square, diag } from "lib";
   console.log(square(5)); // 25
   console.log(diag(4, 3)); // 5
   ```

2. **Promises & Asynchronous Programming:**

   - Understanding of Promises, async/await, and handling asynchronous operations.

     - Promises:

   ```javascript
   let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve("Promise resolved"), 1000);
   });

   promise.then((result) => console.log(result)); // "Promise resolved"
   ```

   - Async/Await:

   ```javascript
   async function getData() {
     let response = await fetch("https://api.example.com/data");
     let data = await response.json();
     console.log(data);
   }

   getData();
   ```

3. **Functional Programming Concepts:**

   - High Order Functions: Functions that take other functions as arguments or return functions as a result.
   - Array methods: `map`, `filter`, `reduce`, etc.
   - Immutability: Essential for React's state management.

   - High Order Functions:

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const double = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]
   ```

   - Array methods:

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
   const even = numbers.filter((n) => n % 2 === 0); // [2, 4]
   const sum = numbers.reduce((acc, n) => acc + n, 0); // 15
   ```

   - Immutability:

   ```javascript
   const obj = { a: 1, b: 2 };
   const newObj = { ...obj, c: 3 }; // { a: 1, b: 2, c: 3 }, obj is not mutated
   ```

4. **Understanding `this`:**

   - Differentiate between regular function and arrow function in terms of how `this` is handled.

   ```javascript
   const person = {
     name: "John",
     greet: function () {
       console.log(`Hello, ${this.name}`);
     },
   };
   person.greet(); // Hello, John
   ```

5. **Understanding Event Loop and Call Stack:**

   - It helps in understanding the asynchronous behavior of JavaScript.

   This is a concept rather than code, please refer to [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) for a great explanation.

6. **Type Checking with JavaScript (`typeof`, `instanceof`):**

   - React PropTypes is a way to enforce type-checking in React.

   ```javascript
   typeof 42; // "number"
   typeof "abc"; // "string"
   typeof true; // "boolean"
   typeof undefined; // "undefined"
   typeof { a: 1 }; // "object"
   typeof [1, 2, 3]; // "object"
   typeof null; // "object" (historical bug in JavaScript)

   class Car {}
   let car = new Car();
   console.log(car instanceof Car); // true
   ```

7. **DOM Manipulation & Events:**

   - Understanding of how to select DOM elements, add event listeners, etc.

   ```javascript
   // select an element
   const element = document.querySelector("#myElement");

   // add an event listener
   element.addEventListener("click", function (event) {
     alert("Element clicked!");
   });
   ```

8. **JSON:**

   - JSON is used extensively in the context of API responses.

   ```javascript
   // JSON -> JS object
   const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
   console.log(obj.name); // "John"

   // JS object -> JSON
   const myJSON = JSON.stringify({ name: "John", age: 30, city: "New York" });
   console.log(myJSON); // '{"name":"John", "age":30, "city":"New York"}'
   ```

9. **Ternary IfElse:**

The ternary operator (also known as the conditional operator) in JavaScript is a more concise way to write simple `if...else` statements. It's called a ternary operator because it takes three operands: a condition, a result for `true`, and a result for `false`.

Here's the basic syntax:

```javascript
condition ? expression_if_true : expression_if_false;
```

- The `condition` is an expression that is evaluated as true or false.
- If the `condition` is true, the operator returns `expression_if_true`.
- If the `condition` is false, it returns `expression_if_false`.

Here is an example:

```javascript
let age = 15;
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // Outputs: "Juice"
```

In this example, the condition checks if `age` is greater than or equal to `21`. If it is, it assigns the string `"Beer"` to the variable `beverage`. If it isn't, it assigns `"Juice"`.

This is equivalent to the following `if...else` statement:

```javascript
let age = 15;
let beverage;

if (age >= 21) {
  beverage = "Beer";
} else {
  beverage = "Juice";
}

console.log(beverage); // Outputs: "Juice"
```

As you can see, the ternary operator provides a shorter, more succinct way to write this kind of simple conditional assignment.

Each of these concepts is used heavily in JavaScript and will be invaluable when working with libraries and frameworks like React.
