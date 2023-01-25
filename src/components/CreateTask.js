import { useNavigate } from 'react-router-dom'
import { createTask } from '../services/tasks-api'

function Create() {
    const nav = useNavigate()

    const createTheTask = (e) => {
        const task = {
            task: e.target.task.value,
            category: e.target.category.value,
            details: e.target.details.value,
            points: e.target.points.value,
            isComplete: false,
        }
        createTask(task).then( () => {
            nav('/')
        })
    }

    return(
        <div>
            <h4>Add A Task!</h4>
            <form onSubmit={createTheTask}>
                <input type='text' name='task'/>
                <input type='text' name='category'/>
                <input type='text' name='details'/>
                <input type='text' name='points'/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Create 