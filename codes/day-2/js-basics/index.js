// try {
//     //presentation logic


//     var toContinue = false
//     do {
//         //1. print menu for calculation: add, subtract, multiply, divide
//         window.alert('1. add, 2. subtract, 3. multiply, 4. divide')

//         //2. ask user for choice

//         var choice = Number(window.prompt('enter choice[1/2/3/4]: ', '0'))
//         if (!choice) {
//             throw new Error('enter number type value')
//         }

//         if (choice > 4 || choice < 1) {
//             throw new Error('invalid choice')
//         }

//         //3. ask user for two inputs
//         var first = Number(window.prompt('enter first value: ', '0'))
//         var second = Number(window.prompt('enter second value: ', '0'))

//         //4. based on choice do the operation and print the o/p
//         var result
//         switch (choice) {
//             case 1:
//                 result = add(first, second)
//                 break;

//             case 2:
//                 result = subtract(first, second)
//                 break;

//             case 3:
//                 result = multiply(first, second)
//                 break;

//             case 4:
//                 try {
//                     result = divide(first, second)
//                 } catch (error) {
//                     window.alert(error.message)
//                 }
//                 break;

//             default:
//                 window.alert('invalid choice')
//                 break;
//         }
//         if (result)
//             window.alert('result: ' + result)

//         //5. the appliaction will ask user whether to continue or not
//         //6. depending on whether to continue or not, application either will start from step-1 or terminate
//         toContinue = window.confirm('çontinue?')

//     } while (toContinue)
// } catch (e) {
//     window.alert(e.message)
// }

//var arr = new Array(1, 2, 3, 4)

// var str = 'harman'
// for (var i = 0; i < str.length; i++) {
//     console.log(str[i] + ':' + typeof str[i])
// }

var arr = [1, 2, 3, 4]
var copy = []

for (var element of arr) {
    copy.push(element)
}

console.log(copy)

var objects = [{
    "name": "anil",
    "id": 1
}, {
    name: 'sunil',
    id: 2
}]

var copyObjects = []
for (var ele of objects) {
    // copyObjects.push(ele)
    var c = {}
    for (var p in ele) {
        var v = ele[p]
        c[p] = v
    }
    copyObjects.push(c)
}

console.log(copyObjects)

var obj = {
    name: 'joy',
    id: 100
}
// obj.location = 'Bangalore'
obj['location'] = 'Bangalore'
obj['sayHi'] = function () { console.log('hi....') }

console.log(obj)
var objCopy = {}
for (var propName in obj) {
    //console.log(propName + ':' + obj[propName])
    var propValue = obj[propName]
    objCopy[propName] = propValue
}
console.log(obj)
console.log(objCopy)
console.log(obj === objCopy)
// var objCopy = {
//     name: obj.name,
//     id: obj.id
// }

