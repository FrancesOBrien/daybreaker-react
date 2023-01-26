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
        deleteTask(id).then(() => nav('/'))
    }

    return(
        <div class="ambient has-background-success-light">
        <article class="message">
            <div class="message-header has-background-warning-dark">
                <p>Do this one thing: {task.task}</p>
                <button class="delete" aria-label="delete" onClick={() => {nav(`/`)}}></button>
            </div>
            <div class="message-body has-background-warning-light">
                {task.details}
            </div>
            <div>
                <button class="button" onClick={() => {nav(`/${id}/edit`)}}>Edit Task</button>
                <button class="button" onClick={deleteTheTask}>Remove Task</button>
            </div>
        </article>
        </div>
    )

}