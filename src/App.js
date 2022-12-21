import React, { Component } from 'react';
import Greet from './Components/Greet';
import Register from './Components/Register';



class App extends Component{
    constructor() {
        super();

        this.state = {
            isRegister: false,
            name: null,
            email: null,
            password: null,
            isShowPassword : false,
        }
    }

    formSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        this.setState({ name, email, password, isRegister: true });
        
    }
    changeHandler = () => {
        this.setState({isShowPassword : !this.state.isShowPassword})
    }
    
    render() {
        return ( 
            <div>
                {
                    this.state.isRegister === false ?
                        <Register
                            submitHandler={this.formSubmit}
                            isShowPassword={this.state.isShowPassword}
                            click={this.changeHandler } />
                        : <Greet name={this.state.name} email={this.state.email }  />
                }
            </div>
        );
    };
};

export default App;