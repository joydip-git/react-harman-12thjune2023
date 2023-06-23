import { useEffect, useState } from "react"
import { getTodoById, updateTodo } from "../../../services/todos-service"
import { Todo } from "../../../models/todo"
import { StrorageService } from "../../../services/storage-service"

type EditTodoPropType = {
    changeShow: (status: boolean) => void,
    selectedTodo: number,
    modifyTodo: (todo: Todo) => void
}
const EditTodo = ({ changeShow, selectedTodo, modifyTodo }: EditTodoPropType) => {
    const [todo, setTodo] = useState<Todo | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const updateTodoHandler = (propName: string, newValue: any) => {
        if (todo) {
            const copy: Todo = {
                ...todo,
                [propName]: newValue
            }
            setTodo(copy)
        }

    }
    useEffect(
        () => {
            // console.log('effect code only first time')
            // return () => {
            //     console.log('clean up only first time')
            // }
            /*
            StrorageService
                .create()
                .storeObservable
                .subscribe({
                    next: (val) => { console.log(val) },
                    error: (err) => { console.log(err) }
                })
            */
            getTodoById(selectedTodo)
                .then(
                    (resp) => {
                        if (resp.status === 200) {
                            setTodo(resp.data)
                            setIsLoading(true)
                            setErrorMessage('')
                        } else {
                            setTodo(undefined)
                            setIsLoading(true)
                            setErrorMessage(resp.statusText)
                        }
                    },
                    (err) => {
                        setTodo(undefined)
                        setIsLoading(true)
                        setErrorMessage(err.message)
                    }
                )
        },
        [selectedTodo]
    )
    let design: any = ''
    if (!isLoading) {
        design = <div>loading....</div>
    } else if (errorMessage !== '') {
        design = <div>{errorMessage}</div>
    } else if (!todo) {
        design = <div>No record found</div>
    } else {
        design = (
            <form>
                <div>
                    <label htmlFor="txtId">Id:&nbsp;</label>
                    <input value={todo?.id} type="text" name="id" id="txtId" readOnly />
                </div>
                <div>
                    <label htmlFor="txtUserId">User Id:&nbsp;</label>
                    <input value={todo?.userId} type="text" name="userId" id="txtUserId" readOnly />
                </div>
                <div>
                    <label htmlFor="txtTitle">Title:&nbsp;</label>
                    <input value={todo?.title} type="text" name="title" id="txtTitle" onChange={
                        (e) => {
                            updateTodoHandler(
                                'title',
                                e.target.value
                            )
                        }
                    } />
                </div>
                <div>
                    <label htmlFor="chkStatus">Completed?:&nbsp;</label>
                    <input type="checkbox" name="completed" id="chkStatus" checked={todo?.completed} onChange={
                        (e) => {
                            updateTodoHandler(
                                'completed', e.target.checked
                            )
                        }
                    } />
                </div>
                <div>
                    <button type="button" onClick={
                        () => {
                            if (window.confirm('Are you sure?')) {
                                updateTodo(todo.id, todo)
                                    .then(
                                        (resp) => {
                                            if (resp.status === 200) {
                                                console.log(resp.data)
                                                modifyTodo(todo)
                                                changeShow(false)
                                            } else {
                                                window.alert('could not update')
                                            }
                                        },
                                        (err) => {
                                            window.alert(err.message)
                                        }
                                    )
                            }
                        }
                    }>Update</button>
                </div>
            </form>
        )
    }
    return design
}

export default EditTodo