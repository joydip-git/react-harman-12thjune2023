async function divide(a, b) {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('denominator should not be zero')
        throw err
    }
    return res
}
function add(a, b) {
    return a + b
}

//IIFE (Immediately Executable Function Expression)
(
    async function () {
        try {
            var op = await divide(12, 3)
            console.log(op)
        } catch (e) {
            console.log(e)
        }
    }
)()
// (function () { })()
console.log(add(12, 3))

// define("", [], function () { })

const r = await fetch(
    '',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }
)
const data = await r.json()
data.forEach(element => {

});










