import React from 'react';
import SideNav from 'react-simple-sidenav';
import style from './sidebar.module.scss';

const  Sidebar = (props) => {
	return (
		<SideNav
          	showNav = {props.showNav}
          	onHideNav = {props.onHideNav}
          	navStyle={{
					backgroundColor: '#045965',
					maxWidth:'250px',
					boxShadow: 0
			}}>
          		<ul className={style.links}>
					{props.sideItems}
				</ul>
        </SideNav>
	);
}

export default Sidebar;