import {ADDTASK, TOGGLEISDONE, EDIT, FILTER} from "./ActionTypes"

export const addTask = (description, id) => ({
    type: ADDTASK,
    description,
    id,
    isDone: false
})

export const toggleIsDone = id => ({
    type: TOGGLEISDONE,
    id 
})

export const edit = (description, id) => ({
    type: EDIT,
    description,
    id
    
})

export const filter = (payload) => ({
    type: FILTER,
    payload
});


