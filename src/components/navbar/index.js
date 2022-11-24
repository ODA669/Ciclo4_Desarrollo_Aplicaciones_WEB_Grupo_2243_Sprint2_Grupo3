import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Envios
          </NavLink>
          <NavLink to='/CrearOrden' activeStyle>
            Crear orden
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-up'>Ingresar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;