import React, { Component } from "react";
import './Greet.css';


class Greet extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="greetParentContainer">
                <div className="greet-child-container">
                    <h3>
                        Hello {this.props.name } Thank You for registring  <br />
                        We have sent you a verification mail to your <br /> registered email {this.props.email } 
                    
                    </h3>
                </div>
            </div>
        );
    };
};

export default Greet;