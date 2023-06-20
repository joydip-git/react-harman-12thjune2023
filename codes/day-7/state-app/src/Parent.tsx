import { Component, ReactNode } from "react";

class Parent extends Component {
    state = {
        value: 10,
        strValue: 'herman',
        boolValue: true,
        obj: { name: '', id: 1, salary: 100 },
        numbers: [1, 2, 3, 4]
    }
    increaseValueHandler = () => {
        //DO NOT MUTATE THE STATE DIRECTLY
        //this.state.value = 20
        //this.render()
        // let copy = { ...this.state }
        // let newState = {
        //     value: 20
        // }
        // this.state = {
        //     ...copy,
        //     ...newState
        // }
        // this.setState(
        //     {
        //         value: 20
        //     },
        //     () => { console.log(this.state) }
        // )
        this.setState(
            (oldState: any) => {
                return {
                    value: oldState.value + 1
                }
            },
            () => { console.log(this.state) }
        )

    }
    //public x: number = 200
    render(): ReactNode {
        return (
            <div>
                Value:&nbsp;{this.state.value}
                <br />
                <button onClick={this.increaseValueHandler}>Increase</button>
            </div>
        )
    }
}
export default Parent