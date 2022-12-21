import React, { Component } from "react";
import './Register.css';



class Register extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {

        const btnStyle = {
            backgroundColor: 'green',
            color : 'white'
        }
        let btnText, passwordType;
        if (this.props.isShowPassword == true) {
            btnStyle.backgroundColor = 'red'
            btnText = 'Hide Password'
            passwordType = 'text'
        } else {
            btnText = 'Show Password'
            passwordType = 'password'
        }

        return (
            <div className="parentContainer">
                <div className="childContainer">
                    <h2>Registration Form</h2>
                    <form onSubmit={this.props.submitHandler}>
                        <div>
                            <label htmlFor="">Username:</label>
                            <input type="text" name="name" placeholder="Usename" required/>
                        </div>

                        <div>
                            <label htmlFor="">EmailId: </label>
                            <input type="email" name="email" placeholder="Email" required/>
                        </div>

                        <div>
                            <label htmlFor="">Password:</label>
                            <input type={passwordType} name="password" placeholder="password" required/>
                        </div>
                            <div className="btnContainer">
                            <button type="submit">Register</button> 
                            <button type='button' style={btnStyle} onClick={this.props.click}>{btnText }</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    };
};

export default Register;