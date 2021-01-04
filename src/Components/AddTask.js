import React,{useState} from 'react';
import {addTask} from "../Actions/Actions"
import {useDispatch} from "react-redux"


function AddTask() {

    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const id = Math.random()

    return (
        <div className="Add">
        <input className='add-input' type="text" placeholder='Add a new todo here please...' onChange={e => setText(e.target.value)} value={text}/>    
        <button className='add-btn' onClick={() =>{ dispatch(addTask(text,id)); setText('')} }> Add Button </button>
        </div>
    )
}

export default AddTask
