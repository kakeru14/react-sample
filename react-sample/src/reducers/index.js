import {combineReducers} from 'redux'
import counter from './counter'
import todo from './todo'

// export default combineReducers({
//     counter:counter,
//     setTodo:setTodo,
//     setText:setText
// })

const rootReducer = combineReducers({
    counter:counter,
    todo:todo,
})

export default rootReducer;