import { Employee } from "./employee";

export class Developer extends Employee {
    constructor(name: string, id: number, basicPay: number, daPay: number, hraPay: number, public incentivePay: number) {
        super(name, id, basicPay, daPay, hraPay)
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentivePay
    }
}