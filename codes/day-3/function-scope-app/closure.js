function outer() {
    var x = 10
    function inner() {
        var y = 20
        var res = x + y
        console.log(res)
    }
    return inner
}
var fnRef = outer()
fnRef()