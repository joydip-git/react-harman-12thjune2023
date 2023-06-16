import { Developer } from "./models/developer";
import { Employee } from "./models/employee";
import { Hr } from "./models/hr";
import axios from "axios";

const people: Employee[] = []

function save() {
    const idInput = <HTMLInputElement>document.getElementById('txtId');
    const id = Number(idInput.value)

    const nameInput = <HTMLInputElement>document.getElementById('txtName');
    const name = nameInput.value

    const basicInput = <HTMLInputElement>document.getElementById('txtBasic');
    const basic = Number(basicInput.value)

    const daInput = <HTMLInputElement>document.getElementById('txtDa');
    const da = Number(daInput.value)

    const hraInput = <HTMLInputElement>document.getElementById('txtHra');
    const hra = Number(hraInput.value)

    const extraInput = <HTMLInputElement>document.getElementById('txtExtra');
    const extra = Number(extraInput.value)

    let employee: Employee | undefined = undefined;
    if (radioDev.checked) {
        employee = new Developer(name, id, basic, da, hra, extra)
    }
    if (radioHr.checked) {
        employee = new Hr(name, id, basic, da, hra, extra);
    }

    if (employee) {
        // people.push(employee)
        // console.log(people)
        // fetch('')
        // axios.post('', employee)
    }
}

const btnObjct = document.getElementById('btnAdd');
btnObjct?.addEventListener(
    'click',
    save
)

const extraLabelObject = <HTMLLabelElement>document.getElementById('lblExtra')

const radioDev = <HTMLInputElement>document.getElementById('radioDeveloper');
radioDev.addEventListener(
    'change',
    function () {
        extraLabelObject.innerText = 'Incentive'
    }
)

const radioHr = <HTMLInputElement>document.getElementById('radioHr');
radioHr.addEventListener(
    'change',
    function () {
        extraLabelObject.innerText = 'Gratuity'
    }
)

//export const x = 10
//import {x} from ''

// const x = 10
// export default x
// export const y=20

// import a from ''
// import {y } from ''





