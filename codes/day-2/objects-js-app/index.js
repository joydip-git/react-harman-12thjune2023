var x = 10
var y = 20
var res = x + y
console.log(res)
this.message = 'hello'


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
console.log(person.prototype)
setTimeout(
    function () {
        console.log('this is async func')
    }
)
var anilObject = new person('anil', 1, 1000)
var sunilObject = new person('sunil', 2, 2000)
console.log(anilObject.print())
console.log(sunilObject.print())

console.log(window)

/**
 * //function main(){

//}()
 */