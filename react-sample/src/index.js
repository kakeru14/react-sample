import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Todo from './components/Todo'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import RouteTodo from './components/RouteTodo';
//import Pro from './components/Pro'
//import TodoList from './components/TodoList'
//import RouteTodo from './components/RouteTodo'

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouteTodo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
