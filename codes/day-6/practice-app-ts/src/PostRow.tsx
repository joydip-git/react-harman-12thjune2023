import React from 'react'
import { Post } from './post'

type PostRowPropType = {
    postData: Post
}
const PostRow = ({ postData }: PostRowPropType) => {
    return (
        <tr>
            <td>{postData.id}</td>
            <td>{postData.userId}</td>
            <td>{postData.title}</td>
            <td>{postData.body}</td>
        </tr>
    )
}

export default PostRow