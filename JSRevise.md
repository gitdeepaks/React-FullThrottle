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

5. **Events:**

In JavaScript, "events" are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. They're a crucial part of the interactive web because they allow us to create functionality that responds to user interaction.

**Types of Events**

1. **UI Events**: load, unload, resize, scroll, etc.
2. **Keyboard Events**: keypress, keydown, keyup
3. **Mouse Events**: click, dblclick, mouseenter, mouseleave, mouseover, mouseout, mousedown, mouseup
4. **Form Events**: submit, change, focus, blur

**How to use Events**
There are several ways to use events in JavaScript:

1. **Inline HTML Event Handlers**: You can add an event directly to the HTML tag inside the HTML document.

```html
<button onclick="alert('Hello World!')">Click Me!</button>
```

2. **Traditional DOM Event Handlers**: These handlers are methods in an HTML DOM object.

```javascript
let btn = document.querySelector("button");
btn.onclick = function () {
  alert("Hello World!");
};
```

3. **DOM Level 2 Event Listeners**: These are methods in an HTML DOM object that let you add and remove event handlers.

```javascript
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("Hello World!");
});
```

The advantage of using `addEventListener` over traditional DOM handlers is that `addEventListener` allows you to add more than one event handler for the same event and element, whereas with traditional handlers, a new event handler overwrites the old one.

**Event Object**
When an event fires, data about that event is packaged into an "event object." This event object is automatically passed to your event handling function. It contains information about the event, like which element fired the event and user interactions such as mouse coordinates.

```javascript
let btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  console.log(event); // Logs event object to the console
});
```

**Event Propagation**
Events in JavaScript have three phases:

1. **Capturing Phase**: The event travels down to the target element.
2. **Target Phase**: The event has reached the target element.
3. **Bubbling Phase**: The event bubbles up from the target element.

By default, event handlers are executed in the bubbling phase, but you can change this by setting the `useCapture` parameter to `true` in the `addEventListener` method.

**Event Delegation**
Event delegation is a technique in which you don't set the event listener on the element you want to click, but on its parent element (or any ancestor). You can then check what element was clicked. This technique is useful when you have a lot of elements handled in a similar way, or when you have dynamically added elements.

```javascript
let ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  let target = event.target; // Where the click happened
  while (target != this) {
    if (target.tagName == "LI") {
      // Found the element we must handle
      alert(target.textContent);
      return;
    }
    target = target.parentNode;
  }
});
```

These are the basic concepts related to JavaScript events. To dive deeper, consider resources like MDN Web Docs, a comprehensive and respected resource for web-related documentation, including JavaScript and its associated APIs.

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

7. **Event Loop and Call back**

**Event Loop**
The JavaScript Event Loop is the secret behind JavaScript's asynchronous programming. JavaScript executes all operations on a single thread, but using the event loop, it can handle asynchronous operations like waiting for user input or fetching data from a server, even while other code continues to execute.

Here's a basic outline of how the event loop works:

1. When your JavaScript program runs, it starts going down your code line by line, executing each line in turn. This is known as the "call stack".

2. When it hits a function that is asynchronous, like `setTimeout` or an AJAX request, instead of holding up the execution of the rest of the code while it waits for a response or the timer to finish, it offloads that function to the Web API provided by the browser.

3. Once the Web API finishes processing the function, it doesn't go back to the call stack. Instead, it goes to the "Callback Queue".

4. The Event Loop constantly checks the call stack. If the call stack is empty, it takes the first event from the Callback Queue and pushes it to the call stack to be executed.

So the Event Loop is what allows JavaScript to be non-blocking and asynchronous, despite being single-threaded.

**Callbacks**
A callback function is a function that is passed into another function as an argument and is expected to be "called back" (executed) at a later time. Callbacks are often used to handle asynchronous operations. Here's a simple example of a callback function:

```javascript
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

In this code, `greeting` is a callback function. It's being passed as an argument to `processUserInput`. `processUserInput` takes the user's name as input and then calls `greeting` with the name as a parameter.

Callbacks are fundamental to JavaScript, but they can lead to problems when used in complex ways. For instance, if you have a callback inside a callback inside another callback (known as "callback hell" or "the pyramid of doom"), the code can get very difficult to read and manage. To deal with these situations, Promises and async/await syntax were introduced, which provide a cleaner and more intuitive syntax for dealing with asynchronous operations.

Remember that callbacks themselves aren't asynchronous. They're just regular functions. What's asynchronous is how they're being used. `setTimeout`, for instance, uses a callback, and it's asynchronous because it doesn't block the rest of your code from running.

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
