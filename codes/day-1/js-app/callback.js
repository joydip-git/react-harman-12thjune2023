function print(data, fnRef) {
    fnRef(data)
}

function printInConsole(val) {
    console.log(val)
}

var value = 'joydip'
print(value, printInConsole)

function raiseIssue(issue, name, machine, fn) {
    fn(issue, name, machine)
}


function saveInDb(issue, name, machine) {

}
function saveInFile(issue, name, machine) {

}

switch (choice) {
    case 1:
        raiseIssue('', '', '', saveInDb)
        break;
}