# Javascript

To run JS, we can use developer console in the browser or create .js files and use <script> tag in a html file and open this html file in the browser. Or use live server extension in VS code on the html page to get automatic reloads on the html page.

### Important concept in javascript - object/array destructuring, spread operator:

https://www.youtube.com/watch?v=NIq3qLaHCIs

destructuring: creating smaller arrays/objects from existing array/object
Refer to destructuring_example.js file

**Concepts To Learn before starting React:**
basics:

1. scoping
2. callbacks, promises, async await
3. passing functions
4. pass by reference vs pass by value
5. == vs ===
   advanced:
6. short circuiting
7. advanced array methods
8. immutability
9. asynchronous
10. concepts of modules
11. concepts of es6 ( i.e. spread operator)

Scoping-
4 types:
global scope - if you have a js file which is not using modules to be imported to a page and it has variables declared (which are not iside any block or function), those are going to be globally accessible in any other file in your entire project
ex. nonModuleFile.js in scoping.html
module scope - most variables are created in module scope only since it is hard to track if variables with global scope being changed by multiple files. For module variables, if they're exported, they are available anywhere you import them.
ex. exportedVar in moduleFile.js
function scope ex. script.js
block scope ex. script.js

Note: var variables are only function scoped

Callbacks-
Note: Functions are just like any other variable
Callbacks are functions that are passed as parameters another function. THis function will do some work and then call that callback function back.
Ex. Suppose you send your vehicle for some oil change and the mechanic says it will take 1 hour and he will call you after the work is done. Meanwhile, you need to wait for the call.

ex1. setTimeout()
ex2. forEach
ex3. async example

Promises-
Note: without type="module" in html file in <script> tag, we won't be able to use import or export statements in the js file

async await - most used

pass by reference vs pass by value
primitive values like numbers, booleans, strings, undefined, null are all passed by value. arrays, objects and classes are passed by reference.

== vs ===
ex. referencevalue.js

short circuiting
ex. short circuiting.js

**advanced arrayMethods**
arrayMethods.js

immutability
