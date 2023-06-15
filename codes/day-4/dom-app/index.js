function show() {
    //const instruction = 'enter value here'
    var paraObject = document.getElementById('mainpara')
    //paraObject.innerText = 'welcome to HTML DOM'
    // paraObject.innerHTML = `
    // <label for='txtValue'>
    //     Value:&nbsp;
    // </label>
    // <input type='text' 
    //     placeholder = 'enter value here'
    //     id = 'txtValue'>
    //     `
    const labelObject = document.createElement('label')
    labelObject.setAttribute('for', 'txtValue')
    labelObject.innerHTML = 'Value:&nbsp;'

    const textObject = document.createElement('input')
    textObject.type = 'text'
    textObject.placeholder = 'enter value here'
    textObject.id = 'txtValue'
    textObject.addEventListener(
        'change',
        function (e) {
            console.log(e.target.value)
        }
    )

    paraObject.append(
        document.createElement('br'),
        labelObject,
        textObject
    )

    //window.alert(paraObject.innerText)
}


window.addEventListener(
    'DOMContentLoaded',
    function () {
        var btnObject = document.querySelector('#btnShow')
        btnObject.addEventListener('click', show)
    }
)