function test() {
    //console.log(y)
    //not a variable declaration (hence not hoisted). above line will throw an error
    y = 100
    console.log(y)
    console.log(x)//? undefined
    var x
    x = 10
    console.log(x)//? 10

    for (var i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x)//? 20
    }
    console.log(x)//? 20

    inner()
    //declaration
    function inner() {
        var x = 100
    }

    //innerAgain() <-- do not call the function before the expression
    //expression
    var innerAgain
    innerAgain = () => {

    }
    innerAgain()
}
function testAgain() {
    var x = 30
    console.log(x)
}

test()
testAgain()