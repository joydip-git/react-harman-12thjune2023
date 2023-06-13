//business logic
//create four functions for four calculations:
//all of them will have two arguments and will return a number type value after calculation

function add(first, second) {
    return first + second
}
function subtract(first, second) {
    return first - second
}
function multiply(first, second) {
    return first * second
}
function divide(first, second) {
    // if (second === 0) {
    //     var err = new Error('denominator should not be zero')
    //     throw err
    // }

    // return first / second

    var res = first / second
    if (res === Infinity) {
        var err = new Error('denominator should not be zero')
        throw err
    }

    return res
}