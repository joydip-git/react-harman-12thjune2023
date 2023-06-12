function filterValues(arrData, fnRef) {
    var resultant = []
    for (var element of arrData) {
        var status = fnRef(element)
        if (status) {
            resultant.push(element)
        }
    }
    return resultant
}
function sortValues(arrData) {
    //sort values present in the arrData
    //internally (mutate the original array)
    var another = []
    for (var x of arrData) {
        another.push(x)
    }
    for (var i = 0; i < another.length; i++) {
        for (var j = i + 1; i < another.length; j++) {
            if (another[i] > another[j]) {
                var temp = another[i]
                another[i] = another[j]
                another[j] = temp
            }
        }
    }
    return another
}
function transformValues(arrInfo) {
    var transformed = []
    for (var value of arrInfo) {
        var temp = value * 5
        transformed.push(temp)
    }
    return transformed
}


var arr = [0, 2, 3, 1, 5, 6, 4, 7, 9, 8]
function isEven(num) {
    if (num % 2 === 0)
        return true
    else
        return false
}
function isOdd(num) {
    if (num % 2 !== 0)
        return true
    else
        return false
}

var result = filterValues(arr, isOdd)
for (var val of result) {
    console.log(val)
}
/*
var sortedArray = sortValues(arr)
var transformedArray = transformValues(sortedArray)

function isEven(num) {
    if (num % 2 === 0)
        return true
    else
        return false
}
var result = filterValues(transformedArray, isEven)

for (var val of result) {
    console.log(val)
}
*/