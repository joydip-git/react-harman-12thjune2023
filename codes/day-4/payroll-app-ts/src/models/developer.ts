class Developer extends Employee {
    constructor(public name: string, public id: number, public basicPay, public daPay: number, public hraPay: number, public incentivePay: number) {
        super(name, id, basicPay, daPay, hraPay)
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentivePay
    }
}