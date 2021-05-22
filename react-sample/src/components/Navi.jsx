import React from 'react';
import {useHistory} from 'react-router-dom'

const Nav = (props) => {
    const history = useHistory();
    const handle = path => history.push(path)
    console.log(history)

    return (
        <>
        <button onClick={() => handle('/about/100')}>About</button>
        <button onClick={() => handle('/users/585')}>Users</button>
        <button onClick={() => handle('/todolist')}>TodoList</button>
        <button onClick={() => handle('/topics')}>Topics</button>
        <button onClick={() => handle('/')}>Home</button>
        </>
    )
}

export default Nav