import React from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Dis = () => {

    const {index} = useParams();
    console.log(index);

    const stateTodos = state => state.routetodo.todos
    const todos = useSelector(stateTodos)

    return (
        <>
        <h2>チケット詳細表示</h2>
        <p><span>チケット名：</span><span>{todos[index].task}</span></p>
        <p><span>詳細：</span><span>{todos[index].discription}</span></p>
        <p><span>担当者：</span><span>{todos[index].person}</span></p>
        <p><span>期日：</span><span>{todos[index].dead}</span></p>
        <p><span>開始日：</span><span>{todos[index].start}</span></p>
        

        </>
    )
}
export default Dis