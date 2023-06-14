/*
//1.
function outer() {
    this.x = 10
    var ref = this
    function inner() {
        this.y = 20
        //console.log(this.x + this.y)
        console.log(ref.x + this.y)
    }
    inner()
}
new outer()
*/
//2.
/*
function outer() {
    this.x = 10
    let inner = function () {
        this.y = 20
        console.log(this.x + this.y)
    }
    //bind() method binds the function with some object and then returns the reference of the bound function
    inner = inner.bind(this)
    inner()
}
new outer()
*/

//3.
function other(fn) {
    fn()
}
function outer() {
    this.x = 10
    let inner = () => {
        this.y = 20
        console.log(this.x + this.y)
    }
    other(inner)
}
new outer()
/*
function PT() {
    this.state = {
        data: 10
    }
    const func = () => {
        window.alert(this.data)
    }
    return (
        <div>
            <Child value={data} fun={func} />
        </div>
    )
}
/**
 * 
 props={
    value:10
    fun:function(){}
 }
 

function Child(props) {
    return (
        <div onClick={props.fun}>{props.value}</div>
    )
}
*/
function person(name, id) {
    this.name = name
    this.id = id
    this.print = () => {
        console.log(this.name + ' ' + this.id)
    }
}
const people = [
    new person('anil', 1),
    new person('sunil', 2)
]
for (const p of people) {
    // printInfo(p.print.bind(p))
    printInfo(p.print)
}
function printInfo(fn) {
    fn()
}