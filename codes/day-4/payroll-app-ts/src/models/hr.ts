import { Employee } from "./employee"

export class Hr extends Employee {
    constructor(public name: string, public id: number, public basicPay: number, public daPay: number, public hraPay: number, public gratuityPay: number) {
        super(name, id, basicPay, daPay, hraPay)
    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay
    }
}