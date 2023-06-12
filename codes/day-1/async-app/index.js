function divide(a, b, callbackFn) {
    if (b === 0) {
        var err = new Error('denominator should not be zero')
        callbackFn(err, undefined)
    } else {
        var r = a / b
        callbackFn(undefined, r)
    }
}

function add(a, b) {
    return a + b
}

function callback(e, data) {
    if (e !== undefined) {
        console.log(e.message)
    }
    if (data !== undefined) {
        console.log(data)
    }
}
divide(12, 3, callback)
// try {
//     var res = divide(12, 0)
//     console.log(res)
// } catch (e) {
//     console.log(e.message)
// }

var addRes = add(10, 20)
console.log(addRes)

