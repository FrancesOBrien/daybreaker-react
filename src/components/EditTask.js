import { getTask, editTask } from '../services/tasks-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTask(){
    const {id} = useParams()
    const nav = useNavigate()
    const [daily, setDaily] = useState({})

    useEffect(() => {
        getTask(id)
        .then(res => setDaily(res.daily))
    }, [])

    const editTheTask = e => {
        e.preventDefault()
        const updatedTask = {
            task: e.target.task.value,
            category: e.target.category.value,
            details: e.target.details.value,
            points: e.target.points.value,
            isComplete: false,
        }
        editTask(id, updatedTask)
        nav(`/${id}`)
    }

    return(
        <div>
            <form onSubmit={editTheTask}>
                task:<input type='text' name='task' defaultValue={daily.task}/>
                categroy:<input type='text' name='category' defaultValue={daily.category}/>
                details:<input type='text' name='details' defaultValue={daily.details}/>
                points:<input type='text' name='points' defaultValue={daily.points}/>
                <input type='submit' />
            </form>
        </div>
    )

}