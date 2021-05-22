import {combineReducers} from 'redux'
import counter from './counter'
import todo from './todo'
import routetodo from './routetodo'

// export default combineReducers({
//     counter:counter,
//     setTodo:setTodo,
//     setText:setText
// })

const rootReducer = combineReducers({
    counter:counter,
    todo:todo,
    routetodo:routetodo,
})

export default rootReducer;