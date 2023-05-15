
function test() {

}
const test2 = test

console.log(test == test2) // true
console.log(test)
test.prop = "Hi"
console.dir(test) // it has everything that a normal object has


// ex1. setTimeout(). First parameter is a callback function  since it is a parameter that is being passed to setTimeout() and second is delay
// callback function will be executed after waiting for 100ms.
console.log("before")
setTimeout(() => {
    console.log("Hello")
}, 100)
console.log("after")
// or

const callbackFun = () => {
    console.log("Hello")
}
setTimeout(callbackFun, 100)

// ex2. forEach iterates throguh the array and calls the callback function on each of those items
const names = ['a', 'b', 'c', 'd']
names.forEach((name) => {console.log(name)})

// ex3. async example using Promises
const loadPokemon = (id, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => { // res.json() returns another promise
        callback(data)
    })
}

loadPokemon(1, (pokemon) => {console.log(pokemon)}) 

// callback hell
setTimeout(() => {
    console.log(3)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(1)
        }, 100)
    }, 100)
}, 100)


// Promises - contains success case (resolve) and error case (reject)
// .then() is used for success case
// .catch() is used for failure case
const myPromise = new Promise((resolve, reject) => {
    const rand01 = Math.floor(Math.random() * 2) // 0 or 1
    if(rand01 == 0) {
        resolve() // success case
    }
    else{
        reject() // reject case
    }
})

myPromise
    .then(() => console.log("success, resolve() was called"))
    .catch(() => console.log("error, reject() was called"))

// async await
// await replaces .then(). So, whenever you get a promise, you need to use await infront of it
const loadPokemon2 = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log('error')
    }
}
loadPokemon2(10)
loadPokemon2(undefined) // error