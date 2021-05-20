import React, {useState} from "react"; 
const FunButton = (props) => {
    // count という名前の state 変数を宣言、初期値 0 をセット
    const [count, setCount] = useState(0) 
    
    return (
    <div> <p>現在の数字は{count}です</p>
    {/* setCount()は、countを更新するための関数。countを引数で受け取ること も出来る */}
    <button onClick={() => setCount(prevState => prevState + 1)}> {props.plus}
    </button>
    <button onClick={() => setCount(count - 1)}>{props.minus}</button> 
    <button onClick={() => setCount(0)}>{props.zero}</button>
    </div> )
    }
    export default FunButton;