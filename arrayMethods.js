const array = [
    {name: 'Bike', price: 400},
    {name: 'ta', price: 20},
    {name: 'ds', price: 10},
    {name: 'sad', price: 5},
    {name: 'sdaf', price: 10000},
    {name: 'q', price: 10},
    {name: 'sge', price: 100},
    {name: 'q', price: 50},
]

// get all elements with price <=100 
// we can use filter(). We return true for the elements we want to include.
// Here, we're using an arrow function
const lesserEqual100 = array.filter((item) => {return item.price<=100})
console.log(lesserEqual100)

// map() - to modify each element in the array to look slightly different
const arrayNames = array.map((item) => {return item.name})
console.log(arrayNames)

// suppose we need to find one item from the array. We can use find().
//  It is going to return only the first matching element ans stops the traversal after finding it.
const foundItem = array.find((item) => {return item.name === 'q'})
console.log(foundItem)


// forEach()
array.forEach((item) => {
    console.log(item)
})

// some() - like any
// if we want to check if any of the elements has price <= 100. It only returns true or false and 
// it is going to stop after finding the first element with price <=100
const hasLessEqual100 = array.some((item) => {
    return item.price <=100
})
console.log(hasLessEqual100)

// every() - same like some(), but returns true only if all of the items satisfy the condition
const hasAllLessEqual100 = array.every((item) => {
    return item.price <=100
})
console.log(hasAllLessEqual100)

// reduce()
// used as an accumulator
// first paramter is the arrow function
// second parameter is the initialization value
// first argument (currentSum) is going to be first initialized with the second paramter (initialization value) of reduce method (0)
// and it is going to be updated each time with the return value of the arrow function
// finally currentSum is going to be returned
const totalSum = array.reduce((currentSum, item) => {
    return currentSum + item.price
}, 0)
console.log(totalSum)

// includes() - same as contains
const includesq = array.includes({name: 'q', price: 10})
console.log(includesq) // false since it is an object
const newArray = [1,2,3,4,2]
const includesTwo = newArray.includes(2)
console.log(includesTwo) // false since it is an object