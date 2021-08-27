import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
class Nav extends Component{
    render(){
        return(
            <div id="navbar">
                <ul>
                    <li>
                    <NavLink
                    exact 
                    to="/"
                    >
                        Home
                    </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        exact 
                        to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        exact
                        to="/projects"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Nav