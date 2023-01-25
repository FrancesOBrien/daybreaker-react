import { useState, useEffect } from 'react'
import { getTask, deleteTask } from '../services/tasks-api'
import { useParams, useNavigate } from 'react-router-dom'

export default function Task() {
    const nav = useNavigate()
    const {id} = useParams()
    const [task, setTask] = useState({})
    useEffect(() => {
        getTask(id)
        .then(res => setTask(res.data))
    }, [])

    const deleteTheTask = () => {
        deleteTask(id)
        nav('/')
    }

    return(
        <div>
            <h1>Do this one thing</h1>
            <h2>{task.task}</h2>
            <h4>{task.category}</h4>
            <h3>{task.details}</h3>
            <h2>{task.points}</h2>
            <h4>Completed: <input type='checkbox' defaultChecked={task.complete} /></h4>
            <br/>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheTask}>Delete</button>
            <button onClick={() => {nav(`/`)}}>Main</button>
            {/* {task.isComplete === true ?
            (<input type='checkbox' checked></input>) : (<input type='checkbox'></input>)} */}
        </div>
    )

}