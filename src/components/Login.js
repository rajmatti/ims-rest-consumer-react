import React,{Component} from "react";

import AuthenticationService from "../service/AuthenticationService";

const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">
          This field is required!
        </div>
      );
    }
  };

export default class Login extends Component{

    constructor(props) {
        super(props)
 
        this.state = {
            email: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange=this.handleChange.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    
    checkLogin(p){
        p.preventDefault();
        let dealer={email:this.state.email, password:this.state.password};
        console.log(JSON.stringify(dealer));
       
        AuthenticationService.loginDealer(dealer).then(response => {
            console.log(response);
            if(response.data){
                this.setState({showSuccessMessage:true})
                this.setState({hasLoginFailed:false})
                this.props.history.push('/products')
            }else{
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            }
        }).catch(() => {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
           
        });
    }

    render(){
        return(
            <div>
                <h1>Dealer Login</h1>
                <div className="container">
                    <form>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div className = "form-group">
                        <label>User Name:</label>  
                        <input type="text" name="email" className="form-control" value={this.state.email}
                        onChange={this.handleChange} validations={[required]} />
                    </div>
                    <div className = "form-group">
                    <label>Password:</label>
                    <input type="password" name="password" className="form-control" value={this.state.password}
                        onChange={this.handleChange} validations={[required]}/>
                    </div>
                    <button className="btn btn-success" onClick={this.checkLogin}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
   
}