const anilDev = new Developer('anil', 2, 1000, 2000, 3000, 4000)
const sunilDev = new Developer('sunil', 1, 1500, 2500, 3500, 4500)

const maheshHr = new Developer('mahesh', 4, 1200, 2200, 3200, 4200)
const sureshHr = new Developer('suresh', 3, 1300, 2300, 3300, 4300)

const people = []
people.push(anilDev, sureshHr, maheshHr, sunilDev)

people.forEach(
    (p) => console.log(p.calculateSalary())
)