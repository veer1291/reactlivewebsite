import React, { useEffect } from 'react'
import Header from './Layout/Header';


export const Home = (props) => {
   

    useEffect(() => {
        alert("Hi I will be called first");
    });
    
    return (
        alert("Hi I will be called second"),
        <div>
            <Header/>
            <h2>{props.name} </h2>
            
        </div>
    )
}
