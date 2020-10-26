import React from "react";
import {NavLink,Link} from 'react-router-dom';

const Navbar = () => {

	return (
		<>
		<div className="navbar-fixed z-depth-0">
		    <nav className="blue darken-3">
		      <div className="nav-wrapper container">
		      	<a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
		        <Link to='/' className="brand-logo"><span className="">Mathale</span>Tutoring</Link>
		        <ul className="right hide-on-med-and-down">
		          <li><NavLink to='/'>Home</NavLink></li>
		          <li><NavLink to='/About'>About</NavLink></li>
		        </ul>
		      </div>
		    </nav>

		     
		  </div>
		  <ul className="sidenav" id="mobile-demo">
		    <li><NavLink to='/'>Home</NavLink></li>
		    <li><NavLink to='/About'>About</NavLink></li>
		  </ul></>
	);
}

export default Navbar;

