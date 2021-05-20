import React,{useState} from 'react'
//import Input from './components/Inpit'
 import {connect} from 'react-redux'
// import {countPlus,countMinus} from '../actions'
import {addTodo,removeTodo,toggle} from '../actions'

const TodoList = (props) => {

    const [task,setText] = useState('')

    

    const createTask = e => {
        console.log('task')
        setText(e.target.value)
    }

    console.log(task)

        
        // const addTask = () => {
        //     console.log('addTaskが発動しました')
        //     setTodo(todos => [...todos,{title:task,flg:false}])
        //     setText('')
        // }
        // const removeTask = (index) => {
        //     console.log('removeTaskが発動しました')
        //     const newTodos = [...todos]
        //     newTodos.splice(index, 1)
        //     setTodo(newTodos)
        // }
        // const toggle = (index) => {
        //     console.log('toggleが発動しました');
        //     console.log(index);
        //     const toggleChange = [...todos]
        //     toggleChange[index].flg = !toggleChange[index].flg
        //     setTodo(toggleChange)
        // }

        //  const props = this.props

        const addtodos = () => {
            props.addTodo(task)
            setText('')
        }
        
        return(
            <React.Fragment>
                <div>
      <h1>todoリスト</h1>
      <div>
      <input  value={task} onChange={createTask} />
      <button onClick={addtodos}>追加</button>
      </div>
      
      <ul>
         { props.todos.map((todo, index) => (
          <li key={ index } className={todo.flg? "conp":""}>{ todo.task } <button onClick={ () => props.removeTodo(index) }>削除</button><button onClick={ () => props.toggle(index)}>完了</button></li>
         ))}
      </ul>
    </div>
    {/* <p>現在の数字は  {props.val}</p>
    <button onClick={props.countPlus}> +1 </button>
    <button onClick={props.countMinus}> -1 </button> */}
            </React.Fragment>     
        )
    
}
const mapStateToProps = state => {
    return {
        todos:state.todo.todos
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo:(task) => dispatch(addTodo(task)),
    removeTodo:(index) => dispatch(removeTodo(index)),
    toggle:(index) => dispatch(toggle(index)),

})
// const mapStateToProps = state => ({
//     val: state.counter.val
// })

// const mapDispatchToProps = dispatch => ({
//     countPlus:()=> dispatch(countPlus()),
//     countMinus:()=> dispatch(countMinus())
// })

//export default Todo;
export default connect (mapStateToProps,mapDispatchToProps)(TodoList)