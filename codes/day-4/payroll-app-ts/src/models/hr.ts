import { Employee } from "./employee"

export class Hr extends Employee {
    constructor(name: string, id: number, basicPay: number, public daPay: number, hraPay: number, public gratuityPay: number) {
        super(name, id, basicPay, daPay, hraPay)
    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay
    }
}