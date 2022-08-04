import React,{Component} from "react";

import AuthenticationService from "../service/AuthenticationService";

export default class Login extends Component{

    constructor(props) {
        super(props)
 
        this.state = {
            email: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
 
    }
    
    checkLogin(){
        let dealer={email:this.state.email, password:this.state.password};
        console.log(JSON.stringify(dealer));
        this.AuthenticationService.checkLogin(dealer).then(response => {
            if(response){
                this.props.history.push('/');
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Dealer Login</h1>
            </div>
        );
    }
   
}