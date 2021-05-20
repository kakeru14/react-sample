export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'
export const ADDTODO = 'addTodo'
export const REMOVETODO = 'removeTodo'
export const TOGGLE = 'toggle'


export const countPlus = () => ({
    type: COUNTPLUS
})
export const countMinus = () => ({
    type: COUNTMINUS
})
export const addTodo = (task) => ({
    type: ADDTODO,
    todo:{
        task:task,
        flg:false
    }
})
export const removeTodo = (index) => ({
    type: REMOVETODO,
    index,index
})
export const toggle = (index) => ({
    type: TOGGLE,
    index:index
})