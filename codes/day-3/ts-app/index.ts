var x: number = 10
console.log(x)

type myType = number | undefined | null

type clsType = {
    name: string,
    id: number
}

function create(): clsType {
    return { name: '', id: 0 }
}

//type fnType = (x: number, y: number) => myType

function add(a: number, b: number): myType {
    return (a + b)
}

const arr: number[] = [1, 2, 3]

function invoke(fn: (x: number, y: number) => myType) {
    fn(10, 20)
}

invoke(add)

function multiply(a: number, b: number, c: number): number {
    return a * b * c
}

class Person {
    // private _name: string
    // private _id: number
    // private _salary: number

    // constructor(_id: number, _name: string, _salary: number) {
    //     this._name = _name
    //     this._id = _id
    //     this._salary = _salary
    // }

    constructor(private _id: number, private _name: string, private _salary: number) {

    }

    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
    public get salary(): number {
        return this._salary
    }
    public set salary(value: number) {
        this._salary = value
    }
    printInfo(): string {
        return `${this._name}, ${this._id}, ${this._salary}`
    }
}
class Trainer extends Person {
    constructor(id: number, name: string, salary: number, private _subject: string) {
        super(id, name, salary)
    }
    printInfo(): string {
        return `${super.printInfo()}, ${this._subject}`
    }
}

abstract class Reader {
    path: string;
    constructor(_path: string) {
        this.path = _path
    }
    public abstract read(): string;
    public sayHi(): void {

    }
}
class FileDataReader extends Reader {
    constructor(_path: string) {
        super(_path)
    }
    public read(): string {
        return 'file data'
    }
}

interface IOperations {
    getData(): string;
}
abstract class Operations implements IOperations {
    public abstract getData(): string;
}

interface Product {
    name: string;
    id: number;
    price: number;
}

const products: Product[] = [
    {
        id: 1,
        name: '',
        price: 100
    }
]




