class Hr extends Employee {
    constructor(name, id, basicPay, daPay, hraPay, gratuityPay) {
        super(name, id, basicPay, daPay, hraPay)
        this.gratuity = gratuityPay
    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuity
    }
}