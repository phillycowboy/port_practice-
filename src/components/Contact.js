import React, {Component} from 'react'

class Contact extends Component{
    render(){
        return(
            <div id="contact">
                <h1>CONTACT</h1>
                <ul>
                    <li>
                        <div id="icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div id="data">
                            benhartermurphy@gmail.com
                        </div>
                    </li><br/>
                    <li>
                        <div id="icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div id="data">
                            919-389-0480
                        </div>

                    </li><br/>
                    <li>
                        <div id="icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div id="data">
                            phillycowboy
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Contact