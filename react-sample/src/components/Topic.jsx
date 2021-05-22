import {Switch,Route,Link,useRouteMatch} from 'react-router-dom'

export const Topics = () => {
    const mutch = useRouteMatch();

    return (
        <div>
            <h2>ネスト項目</h2>
            <ul>
                <li>
                    <Link to={`${mutch.url}/components`}>components</Link>
                </li>
                <li>
                    <Link to={`${mutch.url}/prop`}>prop</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${mutch.path}/components`}>
                    <h3>components</h3>
                </Route>
                <Route path={`${mutch.path}/prop`}>
                    <h3>prop</h3>
                </Route>
            </Switch>
        </div>
    )
}