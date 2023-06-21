import React, { Component } from 'react'
import Nested from './Nested'

type ParentStateType = {
    val: number,
    num: number
}
export default class Parent extends Component<{}, ParentStateType> {
    constructor() {
        super({})
        console.log('Parent created')
    }
    state: Readonly<ParentStateType> = {
        val: 10,
        num: 20
    }
    increaseHandler = () => {
        this.setState(
            (oldState) => {
                return {
                    num: oldState.num + 1
                }
            }
        )
    }
    render() {
        // const n = new Nested({ data: this.state.val });
        // n.render()
        console.log('Parent rendered')
        return (
            <div>
                Parent Num:&nbsp;
                <span>{this.state.num}</span>
                <br />
                <Nested data={this.state.val} />
                <br />
                <button type='button' onClick={this.increaseHandler}>
                    Increase
                </button>
            </div>
        )
    }
    componentDidMount(): void {
        console.log('Parent mounted')
    }
}
