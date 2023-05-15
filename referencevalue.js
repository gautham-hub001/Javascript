// pass by value
let a = 10
let b = "Hi"
let c = a // 10. different 10 because it is pass by value
c = c+1 // a=10 c=11

// pass by reference
let d = [1,2] // d = <0x01>. d only stores the address
let e = d //  e = <0x01>. stores the same address
e.push(3) 
console.log(`d = ${d}`) // d = 1,2,3
console.log(`e = ${e}`) // e = 1,2,3
console.log(`d===e ${d===e}`) // true
console.log(`d==e ${d==e}`) // true

let f = [1,2] // f = 0x05
console.log(`f===d ${f===e}`) // false
console.log(`f==d ${f==e}`) // false


e = [3,4,5] // e = <0x02>. e now points to different address
console.log(`d = ${d}`) // [1,2,3]
console.log(`e = ${e}`) // [3,4,5]

// pass by reference is done when array/object/class is passed as argument to a function
const i = [1,2]
console.log(`i = ${i}`) // [1,2]
add(i,3)
console.log(`i = ${i}`) // [1,2,3]
function add(array, elem) { // address of i gets passed here. So, i is passed by reference and 3 is passed by value
    array.push(elem)
}

// whenever you use = sign, it is going to assign new address value to the variable
let k = [1,2]
reassign(k, 3)
console.log(`k = ${k}`) // [1,2]
function reassign(array, elem) {
    array = [elem] // array = [3]. array now points to a new address. So, the value stored at address of k is unchanged.
}


// reference types: objects, arrays, functions
const person = {name: "john", age: 20} // object
const person2 = person
person2.name="steve" // this changes both in person2 and person since they reference the same object
console.log(person)
console.log(person2)

// spread operator was introduced in ES6 to copy it. It creates a new object
const person3 = {...person}
person3.name = "rogers"
console.log(person)
console.log(person3)


// == vs ===
// == converts both the values on LHS and RHS to same type before comparison
console.log(1==1) // true
console.log(1===1) // true
console.log(1=='1') // true
console.log(1==='1') // false
console.log(1!='1') // false
console.log(1!=='1') // true
console.log(0=='') // true
console.log(0==='') // false
console.log(0==false) // true
console.log(0===false) // false
console.log(null==null) // true
console.log(null===null) // true
console.log(null==undefined) // true
console.log(null===undefined) // false
console.log(null!==undefined) // false