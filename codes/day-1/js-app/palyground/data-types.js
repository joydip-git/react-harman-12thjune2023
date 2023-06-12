var x = 10
var name = 'joydip'
var isTrue = false

function add(a, b) {
    return a + b
}

var nagendraObject = {
    //value properties
    name: 'nagendra',
    id: 1,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

console.log(typeof x)
console.log(typeof name)
console.log(typeof isTrue)
console.log(typeof add)
console.log(typeof nagendraObject)