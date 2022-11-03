import React from "react";

import { withRouter } from 'react-router-dom'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

import AuthenticationService from "../service/AuthenticationService";

const Navbar= () => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
        
        <>
        <Nav>
            <Bars/>
            <NavMenu>
                {isUserLoggedIn &&  <NavLink to='/'>Home</NavLink>}
                {isUserLoggedIn &&   <NavLink to='/products'>Products</NavLink>}
                {!isUserLoggedIn && <NavLink to='/register'>Register</NavLink>}
                {!isUserLoggedIn &&<NavLink to='/about'>About</NavLink>}
              
            </NavMenu> 

            <NavBtn>
                {!isUserLoggedIn &&   <NavBtnLink to='/login'>Login</NavBtnLink>}
                {isUserLoggedIn &&   <NavBtnLink to='/logout' onClick={AuthenticationService.logout}>Logout</NavBtnLink>}
            </NavBtn>
        </Nav>
        </>
    );
}

export default withRouter(Navbar);