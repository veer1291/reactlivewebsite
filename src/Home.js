import React, { useEffect } from 'react'
import Header from './Layout/Header';


export const Home = (props) => {
   

    useEffect(() => {
    });
    
    return (
        <div>
            <Header/>
            <h2>{props.name} </h2>
            
        </div>
    )
}
