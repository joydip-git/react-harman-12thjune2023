console.log('hello')
let data = 10

const numbers: number[] = []
numbers.push(1, 2, 3)

type myType = number | undefined | null
type objType = { name: string, id: number }
type fnType = (a: number, b: number) => number

const obj: objType = { name: 'anil', id: 1 }

const add: fnType = (x, y) => x + y
function invoke(fn: fnType): void {
    console.log(fn(10, 20))
}
invoke(add)

class Person {
    /*
    private _name: string;
    private _id: number;

    constructor(_name: string, _id: number) {
        this._name = _name
        this._id = _id
    }
    */

    constructor(private _name: string, private _id: number) {

    }
    print(): string {
        return `${this._name},${this._id}`
    }
}

class Trainee extends Person {
    constructor(_name: string, _id: number, private _project: string) {
        super(_name, _id)
    }
    print(): string {
        return `${super.print()},${this._project}`
    }
}

abstract class Reader {
    constructor(public _path: string) {

    }
    public abstract read(): string;
    public show(): void {
        console.log('show')
    }
}
//abstract class DbReader extends Reader {
class DbReader extends Reader {
    public read(): string {
        return 'data'
    }
    // public read(): string {
    //     return 'data'
    // }
    constructor(_path: string) {
        super(_path)
    }
}

interface IOperations {
    read(): string;
}
class FileDataReader implements IOperations {
    read(): string {
        return 'data'
    }
}

interface IProduct {
    name: string;
    id: number;
}

class Product implements IProduct {
    name: string;
    id: number;
}

const people: IProduct[] = []
people.push({ name: '', id: 1 })

//T1, T2, TIn
function addValues<TInput>(a: TInput, b: TInput): void {

}
addValues<number>(10, 20)
addValues<string>('h', 'm')

interface IDataAccess<T, TId> {
    addData(data: T): boolean;
    getRecords(): T[];
    getRecord(id: TId): T;
    removeData(id: TId): boolean;
    updateData(id: TId, data: T): boolean;
}

abstract class DataAccess<T, TId> implements IDataAccess<T, TId>{
    constructor(private _dbConnection: string) { }

    public abstract addData(data: T): boolean;
    public abstract getRecords(): T[];
    public abstract getRecord(id: TId): T;
    public abstract removeData(id: TId): boolean;
    public abstract updateData(id: TId, data: T): boolean;

    public getConnectionString(): string {
        return this._dbConnection
    }
}

//class ProductDataAccess implements IDataAccess<IProduct, number>{
class ProductDataAccess extends DataAccess<Product, number>{
    constructor(_connection: string) {
        super(_connection)
    }
    addData(data: IProduct): boolean {
        return true
    }
    getRecords(): IProduct[] {
        return []
    }
    getRecord(id: number): IProduct {
        return { name: '', id: 1 }
    }
    removeData(id: number): boolean {
        return true
    }
    updateData(id: number, data: IProduct): boolean {
        return true
    }
}

const pd = new ProductDataAccess('')

const collection = new Set<number>([1, 1, 2, 3, 4, 2, 5]);
// collection.add(1)
// collection.add(12)
const keysvalues = new Map<number, string>();
keysvalues.set(1, 'harman')
keysvalues.set(0, 'miller')
keysvalues.get(1)

keysvalues.delete(0)

const entries = keysvalues.entries();






