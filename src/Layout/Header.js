import React from 'react';
import {  Link  } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: "gray" }}>
            <div className="container">
                <Link className="navbar-brand" to="/reactlivewebsite">
                    J Solution
                    {/* <img src={airlines} height="50px" /> */}
                </Link>


                <div>
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">

                            <Link className="mr-3" to="/home" >
                                Home
                            </Link>

                        </li>

                        <li >

                            <Link className=" mr-3" to="/about" >
                                About
                            </Link>

                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-a dropdown-toggle"
                                href="!#"
                                id="navbarDropdown"
                                data-toggle="dropdown"
                            >
                                {/* <img src={New} height="50px" /> */}
                                <span className="ml-2 navbar-text">Jatin Malik</span>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="">
                                    Profile
                                </a>
                                <a className="dropdown-item" href="">
                                    Logout
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="">
                                    Ads
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
