import React from "react";
class Button extends React.Component { 
    constructor(props) {
super(props)
this.state = {
// クラスでは、コンストラクタ内で、this.stateの初期値をセット
count: 0 }
}


render() {

    const incre = () => {
        this.setState({ count: this.state.count + 1 })
    }
    const decre = () => {
        this.setState({ count: this.state.count - 1 })
    }
    const zero = () => {
        this.setState({ count: 0 })
    }
    

return ( 
<React.Fragment>
<p>現在の数字は {this.state.count} です</p>
{/*ボタンをクリックした時に、this.setState()を呼ぶことでcountステート を更新 */}
<button onClick={incre}>
     +1
</button>
<button onClick={decre}>
-1
</button>
<button onClick={zero}>0</button>
</React.Fragment> )
} }
export default Button;