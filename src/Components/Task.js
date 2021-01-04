import React,{useState} from "react"
import {toggleIsDone, edit} from "../Actions/Actions"
import {useDispatch} from "react-redux"


function Task ({task}) {

const [edited, setEdited] = useState(false)
const dispatch = useDispatch()

return (
    <li className="Task">

      {edited ? <input className="task-input" type="text" value={task.description} onChange={(e) => dispatch(edit(e.target.value,task.id))}/> 
      : task.isDone ? <p className="task-description" style={{textDecorationLine:"line-through"}}> {task.description} </p> : <p className="task-description">{task.description}</p>
      }

      <button className='edit-btn' onClick={() => setEdited(!edited)}> {edited ? "Update" : "Edit"}</button>

      {task.isDone ? <p className='isDone' onClick={() => dispatch(toggleIsDone(task.id))}>Done</p> : <p className='isDone' onClick={() => dispatch(toggleIsDone(task.id))}>Not Done Yet</p>}

    </li>
  );
}

export default Task