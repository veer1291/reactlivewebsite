import React, { useState } from 'react';


export const About = () => {
    const click = useState('GeeksForGeeks');
    console.log(click)
    return (
        <h1>Welcome to {click}</h1>
    )
}
