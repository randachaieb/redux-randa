import {ADDTASK,TOGGLEISDONE,EDIT, FILTER} from "../Actions/ActionTypes";


const initialState = {
    Tasks : [{id:1, description:"My task", isDone:false} , {id:2, description:"second task", isDone:true}],
    filterString:""
};


const Reducer = (state = initialState, action) => {
switch(action.type) {

    case ADDTASK: 
    return {...state,Tasks : [...state.Tasks,{id: action.id, description: action.description, isDone: action.isDone}]}


    case TOGGLEISDONE: 
    return {...state,Tasks : state.Tasks.map(task => (task.id === action.id) ? {...task, isDone: !task.isDone} : task)}


    case EDIT:
    return {...state,Tasks : state.Tasks.map(task => (task.id === action.id) ? {...task, description: action.description} : task)}

    case FILTER:
    return {...state, filterString: action.payload}
    default:
    return state;
    }
}

export default Reducer
