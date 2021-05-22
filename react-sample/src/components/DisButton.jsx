import { Link } from 'react-router-dom'



const DisButton = (props) => {
    

    return(
        <>
        <button><Link to={`/${props.index}`}>詳細を見る</Link></button>
        </>
    )
}

export default DisButton
