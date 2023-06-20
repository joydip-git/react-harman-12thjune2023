import React from 'react'
import { Post } from './post'

type PostRowPropType = {
    postData: Post,
    deleteFnRef: (x: number) => void
}
const PostRow = (args: PostRowPropType) => {
    return (
        <tr>
            <td>{args.postData.id}</td>
            <td>{args.postData.userId}</td>
            <td>{args.postData.title}</td>
            <td>{args.postData.body}</td>
            <td>
                <button type="button" onClick={
                    () => { args.deleteFnRef(args.postData.id) }
                }>Delete</button>
            </td>
        </tr>
    )
}

export default PostRow