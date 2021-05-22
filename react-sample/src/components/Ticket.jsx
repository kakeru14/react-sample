import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {routeaddTodo} from '../actions'

const Ticket = (props) => {

    const [task,setText] = useState('')
    const createTask = e => setText(e.target.value)

    const [discription,setDiscription] = useState('')
    const createDiscription = e => setDiscription(e.target.value)

    const [person,setPerson] = useState('')
    const createPerson = e => setPerson(e.target.value)

    const [dead,setDead] = useState('')
    const createDead = e => setDead(e.target.value)
    
    const [start,setStart] = useState('')
    const createStart = e => setStart(e.target.value)

    const all = {
        task:task,
        discription:discription,
        person:person,
        dead:dead,
        start:start,
    }

    const dispatch = useDispatch();

    const add = () => {
        console.log('addが発動しました');
        dispatch(routeaddTodo(all))
        setText('')
        setDiscription('')
        setPerson('')
        setDead('')
        setStart('')
    }
    return (
        <>
        <h1>チケット作成画面</h1>
        <p><span>チケット名：</span>
        <input value={task} onChange={createTask}></input></p>
        <p><span>詳細：</span>
        <textarea value={discription} onChange={createDiscription}></textarea></p>
        <p><span>担当者：</span>
        <input value={person} onChange={createPerson}></input></p>
        <p><span>期日：</span>
        <input value={dead} type="date" onChange={createDead}></input></p>
        <p><span>開始日：</span>
        <input value={start} type="date" onChange={createStart}></input></p>
        <p><button onClick={add}>この内容で登録する</button></p>
        </>
    )
}
export default Ticket