var a = 100
function outer() {
    var x = 10
    console.log(x)

    function inner() {
        var y = 20
        console.log(y)

        var res = a + x + y
        console.log(res)
    }

    inner()
}
outer()