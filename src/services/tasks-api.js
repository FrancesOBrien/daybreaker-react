//All endpoints
import axios from 'axios'
const baseURL = 'http://localhost:3001/tasks'

//Show All
export const getTasks = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

//Show One
export const getTask = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

//Edit the Task
export const editTask = (id, updateTask) => {
    const URL = `${baseURL}${id}`
    const response = axios.put(URL, updateTask)
    return response
}

//Create the Task
export const createTask = (task) => {
    const URL = baseURL
    const response = axios.post(URL, task)
    return response
}

//Delete the Task
export const deleteTask = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}
