/*
function person(name, id) {
    this.name = name
    this.id = id
}
person.prototype.print = function () {
    console.log(this)
    console.log(this.name + ' ' + this.id)
}
function trainer(name, id, subject) {
    person.call(this, name, id)
    this.subject = subject
}
*/
class Person {
    #_name
    #_id
    constructor(name, id) {
        this._name = name
        this._id = id
    }
    get name() {
        return this.#_name
    }
    set name(val) {
        this.#_name = val
    }
    get id() {
        return this.#_id
    }
    set id(val) {
        this.#_id = val
    }
    print() {
        return this._name + ' ' + this._id
    }
}
console.log(Person.prototype)
class Trainer extends Person {
    constructor(name, id, subject) {
        super(name, id)
        this.subject = subject
    }
    print() {
        return super.print() + ' ' + this.subject
    }
}
const anilPerson = new Trainer('anil', 1, 'JS')
//console.log(anilPerson.#_id)
anilPerson.name = 'Anil Kumar'
console.log(anilPerson)
// console.log(anilPerson.hasOwnProperty('print'))
// console.log(person.prototype.hasOwnProperty('print'))
// console.log(Object.prototype.hasOwnProperty('print'))
anilPerson.print()