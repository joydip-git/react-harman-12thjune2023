type WelcomePropType = {
    messageValue: string,
    data?: number,
    callFn?: () => void,
    anotherFn?: (val: number) => void,
    children?: JSX.Element | JSX.Element[]
}
const Welcome = (props: WelcomePropType) => {
    const val = 100
    return (
        <div onMouseOver={
            () => {
                if (props.anotherFn)
                    props.anotherFn(val)
            }
        }>
            {props.messageValue}
            <br />
            Data:&nbsp;
            {
                props.data ? props.data : 'NA'
                //props.data && props.data
            }
            <br />
            <button onClick={props.callFn}>Call Me</button>
            <br />
            {
                props.children
            }
        </div>
    )
}
export default Welcome