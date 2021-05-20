// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Button from './components/Button'
import FunButton from './components/FunButton'

class App extends Component{

  with(isMorning){
    if(isMorning){
      return <span>Good Morning</span>
   }else{
     return <span>Hello</span>
   }
  }
  // myChange(e){
  //   const text = e.target.value
  //   //   console.log(text);
  // }
  render(){
    const animal = ['dog','cat','rion']
    
    console.log(animal[0])
    console.log(animal[2])
    const newAnimal = animal.map(el => {
      return el + 'new'
    })
    console.log(newAnimal);
    const cat = animal.filter(el => el==='cat')

    const tasks = [
      { id: 1 , title: 'one'},
      { id: 2 , title: 'two'},
      { id: 3 , title: 'three'},
      { id: 4 , title: 'four'},
      { id: 5 , title: 'five'},
    ]

    const list = tasks.filter(el => el.id%2 === 1)

    console.log(list)

    const newList = list.map((el,index) => {
      return <div>IDは{el.id}TITLEは{el.title}INDEXは{index}</div>
    })
    let isMorning = true

    const Greeting = () => {
      if(isMorning){
        return <span>Good Morning</span>
     }else{
       return <span>Hello</span>
     }
    }
    //----------------------------------

    const numbers = [1,2,3,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9]

    const result = numbers.filter((num,index,self) => {
      console.log(num);
      console.log(index);
      console.log(self);
      return self.indexOf(num)===index
    })

    console.log(result)

    //------------------------------

    const task = [
      { id: 1 , title: '概要作成'},
      { id: 2 , title: '商品詳細'},
      { id: 3 , title: '詳細設計作成'},
      { id: 4 , title: 'ロジック定義'},
      { id: 5 , title: 'テスト'},
    ]

    const list1 = task.filter(el => {
      return el.id %2 ===1
    }).map((el1,index) => {
      return <div>IDは{el1.id}TITLEは{el1.title}INDEXは{index}<button onClick={() => console.log(`この商品のIDは${el1.id}です`)}>button</button></div>
    })

    //const box = document.getElementById("textbox")
    // const valu = box.value
    // console.log(valu)

    // const textValue = (e) => {
    //    const text = e.previousSibling
    //   console.log(e)
    //   console.log('発火しました')
    // }

    // const myChange = (e) => {
    //   const text = e.target.value
    //   console.log(text);
    // }

    

    function inputViews(e){
      console.log('inputViewsが発火されました')
      console.log(e.target.previousElementSibling.value)
      console.log(e)
    }

    
    return (
    <>
    <div>helooooooo</div>
    <div>{newAnimal}</div>
    <div>{cat}</div>
    <div>{newList}</div>
    <div>{(() => {
      if(isMorning){
         return <span>Good Morning</span>
      }else{
        return <span>Hello</span>
      }
      })()}</div>
      <Greeting/>
      <div>{this.with(isMorning)}</div>
      <button onClick={() => console.log('ボタンが押されました')}>button</button>
      <div>{list1}</div>
      <div><input type='text' ></input><button onClick={inputViews}>button</button></div>
      <Huga />
      <Hoge />
      <Men />
      <Button />
      <FunButton plus={+1} minus={-1} zero={0}/>
      <FunButton plus={'１ずつ増えます'} minus={'１ずつ減ります'} zero={'０になります'} inc={1} dec={1}/>
      <FunButton plus={'１ずつ増えます'} minus={'１ずつ減ります'} zero={'０になります'} inc={5} dec={5}/>
    </>
    )}
}


const Huga = () => {
  return (
    <>
    <div>uhgahugahugahugahuga</div>
    <ChildHuga />
    </>
  )
}

const Hoge = () => {
  return (
    <>
    <div>hogehogehogehogehoge</div>
    <ChildHuga />
    </>
  )
}

const ChildHuga = () => {
  return (
    <>
    <div>childHugachildHugachildHuga</div>
    <GrandHuga />
    </>
  )
  
}

const GrandHuga = () => {
  return <div>grandgrandgrandgrandgrandgrandgrandgrandgrandgrandgrand{hoo()}</div>
}

const hoo = () => {
  return 'hoo'
}

const members = [
  {name:'taro'},
  {name:'jiro',age:11},
  {name:'saburo',age:10},
]

const Men = () => {
  // members.defaultProps = {
  //   age:100
  // }
  return(
    members.map((men,index) => {
      return <Menber name={men.name} age={men.age} key={index}/>
    })
  )
}
console.log(Men);

const Menber = (props) => {
  return <div>私の名前は{props.name}、年齢は{props.age}歳</div>
}

Menber.defaultProps = {
  age:100
}

Menber.propTypes = {
  name:PropTypes.string
}

export default App;
