import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Ticket from './Ticket'
import Nav1 from './Navi1'
import {Itiran} from './Itiran'
import Dis from './Dis'
import {Home} from './Home'

const RouteTodo = () => {

return (
    <React.Fragment>
        <h1>Todoリスト</h1>
        <Router>
            <Nav1 />
        <Switch>
            <Route  path ='/ticket' component={Ticket} />
            <Route  path ='/itiran'><Itiran /></Route>
            <Route exact path ='/:index' component={Dis} />
            <Route  path ='/' component={Home} />

        </Switch>
        </Router>
    </React.Fragment>

)
}

export default RouteTodo