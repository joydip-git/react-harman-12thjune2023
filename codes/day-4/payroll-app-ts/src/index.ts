import { Developer } from "./models/developer"
import { Employee } from "./models/employee"
import { Hr } from "./models/hr"

const anilDev = new Developer('anil', 2, 1000, 2000, 3000, 4000)
const sunilDev = new Developer('sunil', 1, 1500, 2500, 3500, 4500)

const maheshHr = new Hr('mahesh', 4, 1200, 2200, 3200, 4200)
const sureshHr = new Hr('suresh', 3, 1300, 2300, 3300, 4300)

const people: Employee[] = []
people.push(anilDev, sureshHr, maheshHr, sunilDev)

people.forEach(
    (p) => console.log(p.calculateSalary())
)

function show() {
    window.alert('hi...')
}