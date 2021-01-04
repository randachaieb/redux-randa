import React from 'react'
import {useDispatch} from 'react-redux'
import {filter} from '../Actions/Actions'

function Filter() {
    
    const dispatch = useDispatch()
    return (
        <div className="Filter">
        <button onClick={() => dispatch(filter('all'))}>All Tasks</button>
        <button onClick={() => dispatch(filter('done'))}>Done </button>
        <button onClick={() => dispatch(filter('not done'))}>Not Done Yet</button>
        </div>
    )
}

export default Filter
