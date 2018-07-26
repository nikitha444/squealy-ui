import React, { Component } from 'react'
import './LoginPage.css'
import logo from '../../assets/logo.png'

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username:'',
          password:'',
          abc: ''
        }
    }
    onChangeUsername(e) {
        this.setState({username: e.target.value});
     }
     onChangePassword(e) {
         this.setState({password: e.target.value});
     }
     handleSubmit = ()=> {
        this.setState({abc:''})
     }
      render(){
          const buttonStyle = {
            borderRadius : '5px',
            width: '280px',
            height: '50px',
            backgroundColor: '#59ad8e',
            color: '#FFFFFF',
            border: '1px solid #59ad8e'
          }
          return (
              <div className="loginContainer">
                <div className="aboutSquealy">
                    <div className="aboutTitle">
                        <img src={logo}/>
                    </div>
                    <p>Squealy Uses the power of SQL to extract the data and provides out-of-the-box visualizations to gather insights from the data.SQuealy is an Open Source BI and Reporting Tool.</p>
                </div>
                <div className="loginForm">
                    <p className="loginHeader">Log In  </p>
                    <div className="loginFields">
                        <div className="userField">
                            <input type = "text" id="loginFieldsInput" value = {this.state.username} 
                                onChange = {this.onChangeUsername.bind(this)} placeholder = "Username"/>
                        </div>
                        <div className="passwordField">
                            <input type = "text" id="loginFieldsInput" value = {this.state.password} 
                                    onChange = {this.onChangePassword.bind(this)} placeholder = "Password"/>
                        </div>
                    </div>
                    <div className="submitLogin">
                        <button
                            style={buttonStyle}
                            onClick={this.handleSubmit}>Log In</button>
                    </div>
                </div>
              </div>
          )
      }
    
}