const { readFileSync } = require('fs')
//Promise.resolve()
//Promise.reject()

function divide(a, b) {
    var p = new Promise(
        //executor function
        (resolveFn, rejectFn) => {
            setTimeout(
                () => {
                    const res = a / b
                    if (res === Infinity) {
                        //throw new Error('denominator should not be zero')
                        //rejectFn('denominator should not be zero')
                        rejectFn(new Error('denominator should not be zero'))
                    }
                    //return a / b
                    resolveFn(res)
                },
                4000
            )
        }
    )
    return p
}
function add(a, b) {
    return a + b
}
function readData() {
    var p = new Promise(
        (resolveFn, rejectFn) => {
            try {
                const data = readFileSync(
                    './data.txt',
                    { encoding: 'utf-8' }
                )
                resolveFn(data)
            } catch (e) {
                rejectFn(e.message)
            }
        }
    )
    return p
}
// const divRes = divide(12, 3)
// console.log(divRes)
var pr = divide(12, 3)
pr
    .then(
        (data) => { console.log(data) },
        (err) => { console.log(err.message) }
    )
//use the following in case of if executor function has no return value, but might throw error and you want to JUST get that error
// pr
//     .catch(
//         (err) => { console.log(err.message) }
//     )

var prData = readData()
prData.then(
    (fileData) => { console.log(fileData) },
    (e) => { console.log(e) }
)

const addRes = add(10, 2)
console.log(addRes)