import {ADDTODO,REMOVETODO,TOGGLE} from '../actions'


const initialState = {todos:[]}

export default(state = initialState,action) => {
    switch(action.type){
        case ADDTODO:
            return {todos:[...state.todos,action.todo]}
        case REMOVETODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.index,1)
            return {todos:newTodos}
        case TOGGLE:
            const toggleChange = [...state.todos]
            toggleChange[action.index].flg = !toggleChange[action.index].flg
            return {todos:toggleChange}
        default :
            return state
    }
}