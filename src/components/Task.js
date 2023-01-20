import { useState, useEffect } from 'react'
import { getTask, deleteTask } from '../services/tasks-api'
import { useParams, useNavigate } from 'react-router-dom'

export default function Task() {
    const nav = useNavigate()
    const {id} = useParams()
    const [task, setTask] = useState({})
    useEffect(() => {
        getTask(id)
        .then(res => setTask(res.daily))
    }, [])

    const deleteTheTask = () => {
        deleteTask(id)
        nav('/')
    }

    return(
        <div>
            <h1>Welcome to this mess</h1>
            <h2>{task.task}</h2>
            <h4>{task.category}</h4>
            <h3>{task.details}</h3>
            <h2>{task.points}</h2>
            <h4>Complete?</h4>
            {task.isComplete === true ?
            (<input type='checkbox' checked></input>) : (<input type='checkbox'></input>)}
        </div>
    )

}