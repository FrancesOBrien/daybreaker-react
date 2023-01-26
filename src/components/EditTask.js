import { getTask, editTask } from '../services/tasks-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTask(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getTask(id)
        .then(res => setData(res.data))
    }, [])

    const editTheTask = e => {
        e.preventDefault()
        console.log(data)
        const updatedTask = {
            task: e.target.task.value,
            category: e.target.category.value,
            details: e.target.details.value,
            isComplete: e.target.isComplete.checked
        }


        editTask(id, updatedTask).then( () => {
            nav(`/${id}`)
        })
        
    }

    return(
        <div>
            <form onSubmit={editTheTask}>
                task:<input type='text' name='task' defaultValue={data.task}/>
                categroy:<input type='text' name='category' defaultValue={data.category}/>
                details:<input type='text' name='details' defaultValue={data.details}/>
                complete: <input type='checkbox' name='isComplete' defaultChecked={data.isComplete}/>
                <input type='submit' />
            </form>
        </div>
    )

}