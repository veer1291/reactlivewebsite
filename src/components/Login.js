import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const navigate = useNavigate()
    const [fname, setFname] = useState('');
    const [password, setPwd] = useState('');

    // console.log(fname);
    // console.log(password);

    const handleSubmit = (event) => {
        console.log(event);
        // debugger;
         event.preventDefault() // Its stops form for submitting 
        console.log(fname, password);

        const obj = {
            "emailAddress": fname,
            "password":password
        }

        console.log(obj)
        navigate('/home')

    }
    return (
        <div className="box">

            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={ (e) => setFname(e.target.value)   }  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPwd(e.target.value)} />
                </div>


                <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
                {/* <p className="forgot-password text-right mt-2">
                Already registered <a href="#">sign in?</a>
            </p> */}
            </form>


        </div>
    )
}

export default Login
