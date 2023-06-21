// import axios from "axios"
import axiosInstance from "../config/axiosconfig"
import { Photo } from "../models/photo"

export const getPhotos = async () => {
    // return axios.get(url)
    return axiosInstance.get<Photo[]>('')
}

export const getPhotoById = async (id: number) => {
    //return axios.get(`${url}/${id}`)
    return axiosInstance.get<Photo>(`${id}`)
}

export const addPhoto = async (p: Photo) => {
    // return axios.post(url, p)
    return axiosInstance.post<Photo>('', p)
}

export const updatePhoto = async (id: number, p: Photo) => {
    //return axios.put(`${url}/${id}`, p)
    return axiosInstance.put<Photo>(`${id}`, p)
}

export const deletePhotoById = async (id: number) => {
    //return axios.delete(`${url}/${id}`)
    return axiosInstance.delete(`${id}`)
}