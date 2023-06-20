import React, { useState } from 'react'
interface Person {
    name: string;
    id: number;
}
function useSta<T>(initialValue: T) {
    let state: T = initialValue
    const update = (newValue: T) => {
        state = newValue
    }
    return [state, update]
}
const StateComp = () => {
    // const arr = useState<number>(10)
    // const numData = arr[0]
    // const updateNumData = arr[1]
    const [numData, updateNumData] = useState<number>(10)

    const updateHandler = () => {
        //updateNumData(11)
        updateNumData(
            (prevValue) => {
                return prevValue + 1
            }
        )
    }
    // useState<string>('')
    // useState<boolean>(false)
    // useState<Person | undefined>(undefined)
    // useState<Person[] | undefined>([])
    return (
        <div>
            Number:&nbsp;{numData}
            <br />
            <button onClick={updateHandler}>Increase</button>
        </div >
    )
}

export default StateComp

/*
class Sample extends Component{
    state = {
        numValue: 0,
        strValue: '',
        boolValue: false,
        personObj: undefined,
        people:[]
    }
}
*/