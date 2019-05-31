import React from 'react';
import style from './navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) =>{
	return (
		<nav className={style.navbar}>
			<Link to="/"><h1>NE</h1></Link>

			<div>
				<span className={style.toggle} onClick={()=>props.onShowNav()}>
					<i className="fas fa-bars"></i>
				</span>

				<ul className={style.links}>
					{props.navItems}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;