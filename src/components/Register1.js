import React, { Component } from 'react'

import '../style/register.css'
import AuthenticationService from '../service/AuthenticationService'


export default class Register extends Component {

    constructor(props) {
        super(props)
 
        this.state = {
            // step 2 - We retrive productId from the route and store it in id variable. 
            id: 0,
            email: '',
            fname: '',
            lname:'',
            password: '',
            dob:'',
            phoneNo:'',
            street: '',
            city: '',
            pincode:''
        }

        
        this.registerDealer=this.registerDealer.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changefNameHandler=this.changefNameHandler.bind(this);
        this.changelNameHandler=this.changelNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeDobHandler=this.changeDobHandler.bind(this);
        this.changePhoneNoHandler=this.changePhoneNoHandler.bind(this);
        this.changeStreetHandler=this.changeStreetHandler.bind(this)
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changePincodeHandler=this.changePincodeHandler.bind(this);
 
    }

    // step 3 
    /*
        The componentDidMount() is executed when the component is mounted for the first time.
        In componentDidMount() method, if the id is _add then we don't do anything,
        else we retrieve Product by id using ProductService.getProductById() method:
    */
    componentDidMount(){
 
      
    }
    
    
    registerDealer = (d) => {
        d.preventDefault();

        let dealer = {email: this.state.email,fname: this.state.fname,lname: this.state.lname, 
            password: this.state.password,dob:this.state.dob, phoneNo: this.state.phoneNo,
            street: this.state.street,city: this.state.city,pincode: this.state.pincode};

        console.log('Dealer => ' + JSON.stringify(dealer));
 
        AuthenticationService.registerDealer(dealer).then(response =>{
            this.props.history.push('/login');
        });

       
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changefNameHandler= (event) => {
        this.setState({fname: event.target.value});
    }

    changelNameHandler= (event) => {
        this.setState({lname: event.target.value});
    }
 
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
 
    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
 
    changePhoneNoHandler= (event) => {
        this.setState({phoneNo: event.target.value});
    }

    changeStreetHandler= (event) => {
        this.setState({street: event.target.value});
    }

    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    changePincodeHandler= (event) => {
        this.setState({pincode: event.target.value});
    }
 
    cancel(){
        this.props.history.push('/home');
    }
    
   

  render() {
    return (
        <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               <h1 className="text-center">Dealer Registration</h1>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Id" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="fname" className="form-control" 
                                                value={this.state.fname} onChange={this.changefNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lname" className="form-control" 
                                                value={this.state.lname} onChange={this.changelNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type="password" placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of Birth: </label>
                                            <input type="date" name="dob" className="form-control" 
                                                value={this.state.dob} onChange={this.changeDobHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone : </label>
                                            <input placeholder="Phone" name="phoneNo" className="form-control" 
                                                value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Street : </label>
                                            <input placeholder="Street" name="street" className="form-control" 
                                                value={this.state.street} onChange={this.changeStreetHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> City : </label>
                                            <select name='city' className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}>
                                                    <option>Bangalore</option>
                                                    <option>Chennai</option>
                                                    <option>Hyderabad</option>
                                                    <option>Kolkatta</option>
                                                    <option>Mumbai</option>
                                                    <option>New Delhi</option>
                                           </select>
                                           
                                        </div>

                                        <div className = "form-group">
                                            <label> Pin Code : </label>
                                            <input placeholder="Pincode" name="pincode" className="form-control" 
                                                value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                        </div>
 
                                        <button className="btn btn-success" onClick={this.registerDealer}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
 
                   </div>
            </div>

    );
  }
}