//import { Fragment } from "react"
const NameList = () => {
    const people: string[] = ['anil', 'sunil', 'suresh', 'mahesh', 'ramesh']
    const design = (
        <>
            <ul>
                <li>--select--</li>
                {
                    people.map(
                        (p, index) => {
                            return <li key={index}><span>{p}</span></li>
                        }
                    )
                }
            </ul>
            <br />
            {/* <ol>
                <li>--select--</li>
                <li>Anil</li>
                <li>Sunil</li>
            </ol> */}
        </>
    )
    return design
}
// const Frag = (props: any) => {
//     return props.children
// }
export default NameList