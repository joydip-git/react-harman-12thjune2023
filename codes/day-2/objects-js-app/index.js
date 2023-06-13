//local variables in gloal scope
// var x = 10
// var y = 20
// var res = x + y
// console.log(res)
// this.message = 'hello'

//constructor function
function person(name, id, salary) {
    var info
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.print = function () {
        info = this.personId + ' ' + this.personName + ' ' + this.personSalary
        return info
    }
}
//creating objects
var anilObject = new person('anil', 1, 1000)
var sunilObject = new person('sunil', 2, 2000)
//accessing value properties
//using dot operator
console.log(anilObject.personName)
//through indexer
console.log(anilObject['personSalary'])

//accessing functions properties of the object
console.log(anilObject.print())
console.log(sunilObject['print']())

//accessing prototype object of this function
console.log(person.prototype)

//calling an asynchronous method
// setTimeout(
//     function () {
//         console.log('this is async func')
//     }
// )

//printing window object
//console.log(window)

/**
 * //function main(){

//}()
 */