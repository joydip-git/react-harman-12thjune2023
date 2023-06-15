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

    const radioDev = <HTMLInputElement>document.getElementById('radioDeveloper');

    const radioHr = <HTMLInputElement>document.getElementById('radioHr');

    if (radioDev.checked) {

    }
    if (radioHr.checked) {

    }

}

const btnObjct = document.getElementById('btnAdd');
btnObjct.addEventListener(
    'click',
    save
)
