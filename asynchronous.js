let a = 1

setTimeout(() => {
    console.log("without passing: ",a) // 10, not 1. So, it is better to pass the variable into the function.
}, 100)

setTimeout(myFun(a), 100)
function myFun(a) {
    console.log("with passing: "+ a) // 1
}

a = 10
