import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      {/*{code here}*/}
       <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        
        <NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Directors</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Login</NavLink>
    </div>
  );
};

export default NavBar;
