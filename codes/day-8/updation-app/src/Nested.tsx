import React, { Component, PureComponent } from 'react'

type NestedPropType = {
    data: number
}
//export default class Nested extends PureComponent<NestedPropType, {}> {
export default class Nested extends Component<NestedPropType, {}> {
    constructor(prop: NestedPropType) {
        super(prop)
        console.log('Nested created.', this.props)
    }
    shouldComponentUpdate(nextProps: Readonly<NestedPropType>, nextState: Readonly<{}>, nextContext: any): boolean {
        if (this.props.data === nextProps.data)
            return false

        return true
    }
    render() {
        //side effect causing code
        console.log('Nested rendered')
        return (
            <div>
                Nested Value:&nbsp;
                {this.props.data}
            </div>
        )
    }
    componentDidUpdate(prevProps: Readonly<NestedPropType>, prevState: Readonly<{}>, snapshot?: any): void {

    }
    componentDidMount(): void {
        console.log('Nested mounted')
    }
}
