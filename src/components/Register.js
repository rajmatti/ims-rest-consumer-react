import React, { Component } from 'react'

import '../style/register.css'
import AuthenticationService from '../service/AuthenticationService'



export default class Register extends Component {

    constructor(props) {
        super(props)
 
        this.state = {
            fields: {},
            errors: {}
          }
    
          this.handleChange = this.handleChange.bind(this);
          this.registerDealer = this.registerDealer.bind(this);   
         
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
   
    
    registerDealer = (d) => {
       
        d.preventDefault();

       if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["fname"] = "";
            fields["lname"] = "";
            fields["password"] = "";
            fields["dob"] = "";
            fields["phoneNo"] = "";
            fields["street"] = "";
            fields["city"] = "";
            fields["pincode"] = "";
            this.setState({fields:fields});

            alert("Registered Successfully");
       
     d.preventDefault();
        let dealer = {email: this.state.fields.email,fname: this.state.fields.fname,lname: this.state.fields.lname, 
            password: this.state.fields.password,dob:this.state.fields.dob, phoneNo: this.state.fields.phoneNo,
            street: this.state.fields.street,city: this.state.fields.city,pincode: this.state.fields.pincode};

        console.log('Dealer => ' + JSON.stringify(dealer));
 
        AuthenticationService.registerDealer(dealer).then(response =>{
            this.props.history.push('/login');
        });

    }
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
       if (!fields["fname"]) {
          formIsValid = false;
          errors["fname"] = "*Please enter your First Name.";
        }
  
        if (typeof fields["fname"] !== "undefined") {
          if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["fname"] = "*Please enter alphabet characters only.";
          }
        }

        if (!fields["lname"]) {
            formIsValid = false;
            errors["lname"] = "*Please enter your Last Name.";
          }
    
          if (typeof fields["lname"] !== "undefined") {
            if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["lname"] = "*Please enter alphabet characters only.";
            }
          }
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["phoneNo"]) {
          formIsValid = false;
          errors["phoneNo"] = "*Please enter your mobile no.";
        }
  
        if (typeof fields["phoneNo"] !== "undefined") {
          if (!fields["phoneNo"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["phoneNo"] = "*Please enter valid mobile no.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }

        if (!fields["street"]) {
            formIsValid = false;
            errors["street"] = "*Please enter your Street.";
          }

        if (!fields["pincode"]) {
            formIsValid = false;
            errors["pincode"] = "*Please enter Pin Code";
          }
    
          if (typeof fields["pincode"] !== "undefined") {
            if (!fields["pincode"].match(/^[0-9]{6}$/)) {
              formIsValid = false;
              errors["phoneNo"] = "*Please enter valid Pin Code";
            }
          }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
    
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
                                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.registerDealer}>
                                    <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Id" name="email" className="form-control" 
                                                value={this.state.fields.email} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.email}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="fname" className="form-control" 
                                                value={this.state.fields.fname} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.fname}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lname" className="form-control" 
                                                value={this.state.fields.lname} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.lname}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type="password" placeholder="Password" name="password" className="form-control"
                                                value={this.state.fields.password} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.password}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of Birth: </label>
                                            <input type="date" name="dob" className="form-control" 
                                                value={this.state.fields.dob} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.dob}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone : </label>
                                            <input placeholder="Phone" name="phoneNo" className="form-control" 
                                                value={this.state.fields.phoneNo} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.phoneNo}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Street : </label>
                                            <input placeholder="Street" name="street" className="form-control" 
                                                value={this.state.fields.street} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.street}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> City : </label>
                                            <select name='city' className="form-control" 
                                                value={this.state.fields.city} onChange={this.handleChange}>
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
                                            <input placeholder="Pin code" name="pincode" className="form-control" 
                                                value={this.state.fields.pincode} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.pincode}</div>
                                        </div>
                                        <input type="submit" className="btn btn-success"  value="Register"/>
                                      
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