import axiosInstance from "../config/axiosconfig"
import { Todo } from "../models/todo"

export const getTodos = async () => {
    return axiosInstance.get<Todo[]>('todos')
}

export const getTodoById = async (id: number) => {
    return axiosInstance.get<Todo>(`todos/${id}`)
}

export const addTodo = async (p: Todo) => {
    return axiosInstance.post<Todo>('todos', p)
}

export const updateTodo = async (id: number, p: Todo) => {
    console.log(p)
    return axiosInstance.put<Todo>(`todos/${id}`, p)
}

export const deleteTodoById = async (id: number) => {
    return axiosInstance.delete(`todos/${id}`)
}