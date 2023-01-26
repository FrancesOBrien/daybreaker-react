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
            {/* <section> */}
            <h4 class='title is-3 has-text-warning-dark'>Add A Task!</h4>
            <form onSubmit={createTheTask}>
                <input class="input" type='text' name='task' placeholder="TASK"/>
                <input class="input" type='text' name='category' placeholder="CATEGORY"/>
                <input class="input" type='text' name='details' placeholder="DETAILS"/>
                <input class="button is-warning" type='submit'/>
            </form>
            {/* </section> */}
        </div>
    )
}

export default Create 