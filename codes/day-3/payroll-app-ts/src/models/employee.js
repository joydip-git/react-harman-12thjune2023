class Employee {
    constructor(name, id, basicPay, daPay, hraPay) {
        this.name = name
        this.id = id
        this.hra = hraPay
        this.da = daPay
        this.basic = basicPay
    }
    calculateSalary() {
        return this.basic + this.da + this.hra
    }
}