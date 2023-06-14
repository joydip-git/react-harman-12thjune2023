function person(name, id) {
    this.name = name
    this.id = id
    this.print = () => {
        console.log(this.name + ' ' + this.id)
    }
}
const people = [
    new person('anil', 1),
    new person('sunil', 2)
]
for (const p of people) {
    // printInfo(p.print.bind(p))
    printInfo(p.print)
}
function printInfo(fn) {
    fn()
}