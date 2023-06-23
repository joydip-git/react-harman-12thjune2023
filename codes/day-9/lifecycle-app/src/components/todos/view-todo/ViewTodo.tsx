import React from 'react'
import { Todo } from '../../../models/todo'
import { StrorageService } from '../../../services/storage-service'

type ViewTodoPropType = {
    todoData: Todo,
    deleteTodo: (id: number) => void,
    changeShow: (status: boolean) => void,
    selectTodo: (id: number) => void
}
const ViewTodo = ({ todoData, deleteTodo, changeShow, selectTodo }: ViewTodoPropType) => {
    // const { todoData } = props
    return (
        <tr>
            <td>{todoData.userId}</td>
            <td>{todoData.title}</td>
            <td>{todoData.completed ? 'Yes' : 'No'}</td>
            <td>
                <button type="button"
                    onClick={
                        () => {
                            deleteTodo(todoData.id)
                        }
                    }>
                    Delete
                </button>
            </td>
            <td>
                <button type="button" onClick={
                    () => {
                        changeShow(true)
                        // StrorageService
                        //     .create()
                        //     .publish(todoData.id)

                        selectTodo(todoData.id)
                    }
                }>Edit</button>
            </td>
        </tr>
    )
}

export default ViewTodo