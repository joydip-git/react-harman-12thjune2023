import { useEffect, useState } from "react"
import { Todo } from "../../../models/todo"
import ViewTodo from "../view-todo/ViewTodo"
import { deleteTodoById, getTodos } from "../../../services/todos-service"
import { AxiosResponse } from "axios"
import EditTodo from "../edit-todo/EditTodo"

type TodoListStateType = {
    todos: Todo[],
    isLoadingComplete: boolean,
    errorMessage: string
}
const TodoList = () => {

    const [show, setShow] = useState<boolean>(false)
    const [todoListState, setTodoListState] = useState<TodoListStateType>({ todos: [], errorMessage: '', isLoadingComplete: false })
    const [selectedTodoId, setSelectedTodoId] = useState<number>(0)
    const { isLoadingComplete, errorMessage, todos } = todoListState

    useEffect(
        () => {
            let p: Promise<AxiosResponse<Todo[], any>> | null = getTodos()
            p?.then(
                (resp: AxiosResponse) => {
                    if (resp.status === 200) {
                        const records = resp.data
                        setTodoListState({
                            todos: records,
                            errorMessage: '',
                            isLoadingComplete: true
                        })
                    } else {
                        setTodoListState({
                            todos: [],
                            errorMessage: resp.statusText,
                            isLoadingComplete: true
                        })
                    }
                },
                (err: any) => {
                    setTodoListState({
                        todos: [],
                        errorMessage: err.message,
                        isLoadingComplete: true
                    })
                }
            )
            return () => {
                p = null
            }
        },
        []
    )

    const todoUpdateHandler = (newTodo: Todo) => {
        const copytodos = [...todos]
        const index = copytodos.findIndex(t => t.id === newTodo.id)
        if (index >= 0) {
            copytodos.splice(index, 1, newTodo)
            // const newState: TodoListStateType = {
            //     ...todoListState,
            //     todos: copytodos
            // }
            // setTodoListState(newState)
            setTodoListState(
                (oldState) => {
                    return {
                        ...oldState,
                        todos: copytodos
                    }
                }
            )
        }
    }
    const selectTodoHandler = (todoId: number) => {
        setSelectedTodoId(todoId)
    }
    const showHandler = (status: boolean) => {
        setShow(status)
    }
    const deleteTodoHandler = (todoId: number) => {
        deleteTodoById(todoId)
            .then(
                (resp) => {
                    if (resp.status === 200) {
                        const copyTodos = [...todos];
                        let index = copyTodos.findIndex(t => t.id === todoId)
                        if (index >= 0) {
                            copyTodos.splice(index, 1)
                            setTodoListState({
                                todos: copyTodos,
                                errorMessage: '',
                                isLoadingComplete: true
                            })
                        }
                    } else {
                        window.alert('could not delete')
                    }
                },
                (err: any) => {
                    window.alert('try later...')
                }
            )
    }
    let design: any = ''
    if (!isLoadingComplete) {
        design = <div>Loading...</div>
    } else if (errorMessage !== '') {
        design = <div>{errorMessage}</div>
    } else if (todos.length === 0) {
        design = <div>No records</div>
    } else {
        design = (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                (t) => {
                                    return <ViewTodo key={t.id} todoData={t} deleteTodo={deleteTodoHandler} changeShow={showHandler} selectTodo={selectTodoHandler} />
                                }
                            )
                        }
                    </tbody>
                </table>
                {
                    show && (
                        <>
                            <br /><br />
                            <EditTodo changeShow={showHandler} selectedTodo={selectedTodoId} modifyTodo={todoUpdateHandler} />
                        </>
                    )
                }
            </>
        )
    }

    return design
}

export default TodoList