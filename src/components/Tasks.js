import { getTasks } from '../services/tasks-api'
import { useState, useEffect } from 'react'
import Create from './CreateTask'
import { Link, useNavigate } from 'react-router-dom'

export default function Tasks() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        getTasks()
        .then(res => {
            setTasks(res.data)
    })
 }, [])

    return(
        <div>
            {tasks.length > 0 ? <ul>
                {tasks.map((task) => {
                    return(
                        <div><Link to={`/${task._id}`}>{task.task}</Link></div>
                    )
                })}
            </ul> : <div></div>}
            <Create />
        </div>
    )
}
