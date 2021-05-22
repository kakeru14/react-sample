import React from 'react'
import {useHistory} from 'react-router-dom'

const Nav1 = () => {

    const history = useHistory();
    const handle = path => history.push(path)
    return(
        <>
        <button onClick={() => handle('/ticket')}>新規チケット作成</button>
        <button onClick={() => handle('/itiran')}>チケット一覧</button>
        </>
    )
}

export default Nav1