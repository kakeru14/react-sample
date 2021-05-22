export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'
export const ADDTODO = 'addTodo'
export const REMOVETODO = 'removeTodo'
export const TOGGLE = 'toggle'
export const ROUTEADDTODO = 'routeaddTodo'
export const ROUTEREMOVETODO = 'routeremoveTodo'
export const ROUTETOGGLE = 'routetoggle'


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
export const routeaddTodo = (all) => ({
    type: ROUTEADDTODO,
    todo:{
        task:all.task,
        discription:all.discription,
        dead:all.dead,
        start:all.start,
        person:all.person,
        flg:false
    }
})
export const routeremoveTodo = (index) => ({
    type: ROUTEREMOVETODO,
    index,index
})
export const routetoggle = (index) => ({
    type: ROUTETOGGLE,
    index:index
})