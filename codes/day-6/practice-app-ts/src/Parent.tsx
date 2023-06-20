import React from 'react'

const Parent = () => {
    const fn = (e: any, x: string): void => {
        console.log(e)
        window.alert(x)
    }
    return (
        <div>
            <Nested callbackFn={fn} />
        </div>
    )
}
/**
 * {callbackFn:fn}
 */
type NestedPropType = {
    callbackFn: (e: any, a: string) => void
}
const Nested = (args: NestedPropType) => {
    return <button
        type='button'
        //onClick={ args.callbackFn}
        onClick={
            (e) => {
                args.callbackFn(e, 'joydip')
            }
        }
    >
        Call Fn
    </button>
}

export default Parent