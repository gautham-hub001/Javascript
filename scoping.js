const a = 5

function testScope() {
    const b = 10 // function scoped
    console.log(a,b) // 5 10
    if(true) {
        const c = 1 // block scoped 
        var d = 15
        const b = 100
        console.log(b) // 100. This is a seperate variable. So, you cannot access outside b here now
    }
    // console.log(c) //error
    console.log(b) // 10
    console.log(d) // 15. Because var variables are only function scoped
}
testScope()
// console.log(a,b) // gives error saying b is not defined.

// console.log(globalVar) // error because global variables need to be imported into module files

