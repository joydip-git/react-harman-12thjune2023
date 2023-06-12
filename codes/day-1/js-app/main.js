var numbers = [0, 2, 3, 1, 5, 6, 4, 7, 9, 8]

function compareValues(a, b) {
    return a - b
}
/*
for(....){
    for(....){
        var compvalue = compareValues(a[i],a[j])
        if(compvalue>0){}
    }
}
*/
numbers.sort(compareValues)
var filteredArray = numbers
    .filter(
        function (num) {
            //return num % 2 === 0 ? true : false
            return num % 2 === 0
        }
    )
filteredArray
    .map(
        function (num) {
            return num * 5
        }
    )
