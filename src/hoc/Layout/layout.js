import React,{ Component } from 'react';
import style from './layout.module.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';

class Layout extends Component{

	constructor(props){
		super(props);

		this.state = {
			transform: 'scale(0)',
			transition: '0.4s'
		}
	}

	scrollToTop = () =>{
		window.scroll({
		  top: 0, 
		  behavior: 'smooth'
		});
	}

	scrollBtnDisplay = () =>{
		let scale = (window.pageYOffset < 100 ? 'scale(0)' : 'scale(1)');

		this.setState({
			transform:scale
		})
	}

	displayBtn = () =>{
		return (
				<div onClick={()=>this.scrollToTop()} className={style.topBtn} style={{...this.state}}>
					<i className="fas fa-chevron-up"></i>
				</div> 
			)
	}

	componentDidMount(){
		window.addEventListener('scroll', this.scrollBtnDisplay);
	}

	render(){
		return (
			<div className="wrapper">
				<Header />

				{this.props.children}

				{this.displayBtn()}

				<Footer />
			</div>
		);		
	}

}

export default Layout;