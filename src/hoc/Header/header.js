import React,{ Component } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import style from './header.module.scss';
import Navbar from './Navbar/navbar';
import Sidebar from './Sidebar/sidebar';

class Header extends Component{

	constructor(props){
		super(props);

		this.state = {
			showNav: false
		}
	}

	toggleSidebar = (toggle) =>{
		this.setState({
			showNav: toggle
		});
	}

	routes = [
		{
			path: '/',
			name: 'HOME',
			exact: true
		},
		{
			path: '/about',
			name: 'ABOUT',
			exact: false
		},
		{
			path: '/skills',
			name: 'SKILLS',
			exact: false
		},
		{
			path: '/portfolio',
			name: 'PORTFOLIO',
			exact: false
		},
		{
			path: '/resume',
			name: 'RESUME',
			exact: false
		},
		{
			path: '/contact',
			name: 'CONTACT',
			exact: false
		},
	];

	navItems = this.routes.map((item,index)=>{
		return (
			<li key={index}>
				<NavLink 
				to={item.path} 
				exact={item.exact}
				activeClassName={style.activeLink}>{item.name}</NavLink>
			</li>
		)
	});

	sideItems = this.routes.map((item,index)=>{
		return (
			<li key={index}>
				<NavLink 
				to={item.path} 
				exact={item.exact}
				activeClassName={style.activeLink}
				onClick={()=>this.toggleSidebar(false)}>{item.name}</NavLink>
			</li>
		)
	});

	render(){
		return(
			<Container fluid>
				<div className={style.header}>
					<Navbar 
						onShowNav={()=>this.toggleSidebar(true)} 
						navItems={this.navItems}/>

					<Sidebar 
						{...this.state} 
						onHideNav={() => this.toggleSidebar(false)}
						sideItems={this.sideItems}/>

					<div className={style.name}>
						<h1>NINOESPINA</h1>
					</div>

					<div className={style.title}>
						<h4>Web Designer / Web Developer</h4>
					</div>

					<div className={style.cover}>
						<img src="./images/background.png" alt="cover"/>
					</div>
					
				</div>
			</Container>
		);
	}
}

export default Header;