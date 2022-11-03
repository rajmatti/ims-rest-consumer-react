import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit, faCamera, faList} from "@fortawesome/free-solid-svg-icons";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ViewProduct from './components/ViewProduct';
import CreateProduct from './components/CreateProduct';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';


import AuthenticatedRoute from './components/AuthenticatedRoute';


library.add(faTrash, faEdit, faPlus, faCamera, faList);

//npm install react-router-dom@5 to install 
/*
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Inventory Management System</h1>
      </header>
      <div style={{ backgroundImage: "url(/images/back1.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover', minHeight:'100vh',minWidth:'100vw'}}>
      <Router>
        <Navbar></Navbar>
        <div className='container'>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <AuthenticatedRoute path='/products' component={Products}/>
          <Route path='/viewProduct/:id' component={ViewProduct}></Route>
          <Route path='/addProduct/:id' component={CreateProduct}></Route> 
          <Route path='/login' component={Login}></Route>  
          <Route path='/register' component={Register}></Route>   
          <AuthenticatedRoute path='/logout' component={Logout}/> 
        </Switch>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
