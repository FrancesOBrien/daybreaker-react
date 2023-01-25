import { getTasks } from '../services/tasks-api'
import { useState, useEffect } from 'react'
import Create from './CreateTask'

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
                        <li><a href={`/${task._id}`}>{task.task}</a></li>
                    )
                })}
            </ul> : <div></div>}
            <Create />
        </div>
    )
}