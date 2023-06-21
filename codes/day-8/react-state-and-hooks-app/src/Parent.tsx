import { Component, ReactNode } from "react";
import { Post } from "./Post";
import { records } from "./data";

type ParentPropType = {
    data: number,
    nameVal: string
}
type ParentStateType = {
    posts: Post[]
}
class Parent extends Component<ParentPropType, ParentStateType> {
    state: Readonly<ParentStateType> = {
        posts: records
    }
    deletePostHandler = (id: number) => {
        //spread operator
        const copy = [...this.state.posts]
        const index = copy.findIndex(
            (p) => p.id === id
        )
        if (index >= 0) {
            copy.splice(index, 1)
            this.setState({
                posts: copy
            })
        }
    }
    render(): ReactNode {
        let design: any = ''
        if (this.state.posts.length === 0) {
            design = <div>No records</div>
        } else {
            design = (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map(
                                (p) => (
                                    <tr key={p.id}>
                                        <td>{p.title}</td>
                                        <td>{p.body}</td>
                                        <td>
                                            <button type="button" onClick={() => { this.deletePostHandler(p.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            )
        }
        return design
    }
}
export default Parent