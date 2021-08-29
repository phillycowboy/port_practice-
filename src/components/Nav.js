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
                    style={{textDecorationLine: "none"}}
                    >
                        Home
                    </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        exact 
                        to="/about"
                        style={{textDecorationLine: "none"}}

                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        exact
                        to="/projects"
                        style={{textDecorationLine: "none"}}

                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to="/contact"
                        style={{textDecorationLine: "none"}}

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