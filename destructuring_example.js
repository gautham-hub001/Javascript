// 1. Array destructuring
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
const numbers = [1, 2, 3, 4, 5, 6]

// const a = alphabet[0]
// const b = alphabet[1]

// better way to do this using array destructuring
const [a, b] = alphabet
const [A, B, ...cz] = alphabet // put the remaining array elements (from c to z) in cz
const [a1,, c1] = alphabet // skip b

const mixedArray = [...alphabet, ...numbers]

console.log(a, b)
console.log(A, B, cz)
console.log(a1, c1)
console.log(mixedArray)

function sumAndArray(a,b) {
    return [a+b, a*b]
}
const [sum, multiply, division='No division'] = sumAndArray(2,3)
console.log('sum: ', sum, 'multiply: ',multiply, 'division: ', division)

// 2. Object destructuring
const personOne = {
    name: 'john',
    age: 20,
    address: {
        city: 'los angeles',
        state: 'cali'
    }
}
// order doesnot matter and it depends on name of the key.
// You can change the name of the variable too (ex. firstName)
// we can also have default values
const {age, name: firstName, favoritefood = 'Rice', thisIsNotAvailable} = personOne 
console.log(firstName, age, favoritefood, thisIsNotAvailable)

const {name, ...rest} = personOne
console.log(name, rest) 

// nested destructuring
const {address: {state}} = personOne
console.log(state)

// overriding of common values
const personTwo = {
    name: 'Alfred',
    gender: 'male'
}
const personThree = {...personOne, ...personTwo}
console.log(personThree)

function printUser({name, age}) {
    console.log(`Name: ${name} Age: ${age}`)
}
printUser(personOne)