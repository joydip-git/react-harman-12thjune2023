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
function transformValues(arrInfo, fnRef) {
    var transformed = []
    for (var element of arrInfo) {
        var multiplied = fnRef(element)
        transformed.push(multiplied)
    }
    return transformed
}


var arr = [0, 2, 3, 1, 5, 6, 4, 7, 9, 8]

var sortedArray = sortValues(arr)

function transform(value) {
    return value * 5
}
var transformedArray = transformValues(sortedArray, transform)

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

var result = filterValues(transformedArray, isOdd)
for (var val of result) {
    console.log(val)
}

function post(message) {
    this.post = message
    this.comments = []
    this.likes = []
}

var p = new post('assadhjd')
p.comments.push()
