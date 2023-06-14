class Developer extends Employee {
    constructor(name, id, basicPay, daPay, hraPay, incentivePay) {
        super(name, id, basicPay, daPay, hraPay)
        this.incentive = incentivePay
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentive
    }
}