import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar= () => {
    return (
        <>
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </NavMenu> 

            <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
}

export default Navbar;