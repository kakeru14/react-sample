import {useParams} from 'react-router-dom'

export const Users = () => {

    const {userId} = useParams();

    return (
        <>
    <h2>USER</h2>
    <h2>userId:{userId}</h2>
    </>
    )
}