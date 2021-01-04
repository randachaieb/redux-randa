import React from 'react'
import Task from "./Task"
import {useSelector} from "react-redux"



function ListTask () {
    const Tasks = useSelector(state => state.Tasks)
    const FilterString = useSelector(state => state.filterString)

    let result = []
    
    if (FilterString === 'all') {
        result = Tasks
    } else if (FilterString === 'done') {
        result = Tasks.filter(task => task.isDone)
    } else {
        result = Tasks.filter(task => !task.isDone)
    }

    return (
    <div className='ListTask'>
    <ul>  {result.map(task => <Task key={task.id} task={task}/>)}  </ul>
    </div>
);
}


export default ListTask;