import React from 'react'
import { Post } from './post'
import PostRow from './PostRow'

type PostListPropType = {
    records: Post[],
    deleteFn: (x: number) => void
}

const PostList = (props: PostListPropType) => {
    //const { records } = props
    const records = props.records
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map(
                        (p: Post) => {
                            return (
                                <PostRow
                                    postData={p}
                                    key={p.id} deleteFnRef={props.deleteFn} />
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default PostList