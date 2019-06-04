import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import style from './footer.module.scss';
import { Link }  from 'react-router-dom';

const Footer = () =>{
	return (
		<div className={style.footer}>
			<Container>
				<Row>
					<Col 
						lg={2}
						sm={12}
						className={style.social}>

						<h6>FOLLOW ME ON</h6>

						<div>
							<a 
								href="https://www.facebook.com/nino.espina1998" 
								target="_blank"
								rel="noopener noreferrer">
								
								<i className="fab fa-facebook mr-2"></i>
							</a>
							<a 
								href="https://www.messenger.com/t/nino.espina1998" 
								target="_blank"
								rel="noopener noreferrer">

								<i className="fab fa-facebook-messenger mr-2"></i>
							</a>
							<a 
								href="https://www.instagram.com/nc.espina" 
								target="_blank"
								rel="noopener noreferrer">

								<i className="fab fa-instagram"></i>
							</a>
						</div>
					</Col>
					<Col 
						lg={6}
						sm={12}
						className={style.disclaimer}>
						
						<h6>DISCLAIMER</h6>

						<div>
							<p>This Website is for portfolio only. Also, this site does not contain any copyrighted resources excluding <a href="https://www.freepik.com/" target="_blank"
								rel="noopener noreferrer">freepik.com </a>. All resources are made by Niño Espina.</p>
						</div>
					</Col>
					<Col 
						lg={2}
						sm={12}
						className={style.quick_links}>
						
						<h6>QUICK LINKS</h6>

						<div>
							<Link to="/about">About</Link>
							<Link to="/skills">Skills</Link>
							<Link to="/portfolio">Portfolio</Link>
							<Link to="/resume">Resume</Link>
						</div>
					</Col>
					<Col 
						lg={2}
						sm={12}
						className={style.contact_me}>
						
						<h6>CONTACT ME</h6>

						<div>
							<p>You got any questions? Please <Link to="/contact" style={{color:'#fff',textDecoration:'underline'}}>contact me</Link> at your most convinient time. Thank you.</p>
						</div>
					</Col>
				</Row>
			</Container>

			<small style={{position:'absolute',left: 20,bottom:5}}>All rights reserved 2019</small>
			<small style={{position:'absolute',right: 20,bottom:5}}>
				<Link to="/">Privacy & Terms</Link>
			</small>
		</div>
	)
}

export default Footer;