class Employee {

    constructor(public name: string, public id: number, public basicPay: number, public daPay: number, public hraPay: number) {

    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay
    }
}