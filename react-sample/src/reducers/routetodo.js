import {ROUTEADDTODO,ROUTEREMOVETODO,ROUTETOGGLE} from '../actions'


const initialState = {todos:[]}

export default(state = initialState,action) => {
    switch(action.type){
        case ROUTEADDTODO:
            console.log(action.todo);
            return {todos:[...state.todos,action.todo]}
        case ROUTEREMOVETODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.index,1)
            return {todos:newTodos}
        case ROUTETOGGLE:
            const toggleChange = [...state.todos]
            toggleChange[action.index].flg = !toggleChange[action.index].flg
            return {todos:toggleChange}
        default :
            return state
    }
}