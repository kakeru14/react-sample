import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
//import { routeremoveTodo } from '../actions'
import {routeremoveTodo,routetoggle} from '../actions'
//import {useRouteMatch,Switch,Route,Link} from 'react-router-dom'
//import {useHistory} from 'react-router-dom'
//import Dis from './Dis'
import DisButton from './DisButton'


export const Itiran = () => {

    const stateTodos = state => state.routetodo.todos
    const todos = useSelector(stateTodos)

    const dispatch = useDispatch();

    // const history = useHistory();
    // const handle = (path) => history.push(path)

    //const match = useRouteMatch();

    return(
        <>
        <h1>チケット一覧画面</h1>
        <ol>
            {
                todos.map((todo,index) => (
                    <li key={ index } className={todo.flg? "conp":""}>
                        {todo.task} 担当者：{todo.person}<button onClick={() => dispatch(routeremoveTodo(index))}>削除</button>
                        <button onClick={ () => dispatch(routetoggle(index))}>完了</button>
                        <DisButton all={todo} index={index}/>
                    </li>
                ))
            }
        </ol>
        
        </>
    )
}

