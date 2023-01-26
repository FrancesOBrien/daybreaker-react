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
            <section class="subtitle">
            {tasks.length > 0 ? <ul>
                {tasks.sort((a, b) => b.category.localeCompare(a.category)).map((task) => {
                    return(
                        <li class="subtitle">
                            <label class="checkbox">
                                    <input type="checkbox"></input>
                            </label>
                            <Link to={`/${task._id}`}>
                                {task.category} : {task.task}
                            </Link>
                        </li>
                    )
                })}
            </ul> : <div></div>}
            <br/>
            <Create />
            </section>
        </div>
    )
}
