import React from 'react'
import { Post } from './post'
import PostRow from './PostRow'

type PostListPropType = {
    records: Post[]
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
                </tr>
            </thead>
            <tbody>
                {
                    records.map(
                        (p: Post) => {
                            return (
                                <PostRow
                                    postData={p}
                                    key={p.id} />
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default PostList