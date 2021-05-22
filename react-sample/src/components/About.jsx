import React from 'react';
import {useParams} from 'react-router-dom'


export const About = () => {

    const {aboutId} = useParams();
  

    return (
        <React.Fragment>
        <h2>ABOUT</h2>
        <h2>id:{aboutId}</h2>
        
        </React.Fragment>
        
    )
}