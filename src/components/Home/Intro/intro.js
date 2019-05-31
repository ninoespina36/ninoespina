import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './intro.module.scss';

const Intro = () =>{
	return(	
		<Container className="mt-3 mt-lg-5">
			<Row>
				<Col className="d-flex justify-content-center">
					<div className="d-flex justify-content-end align-items-bottom" style={{width: '40%'}}>
						<img src="./images/me.png" alt="" className={style.myself} align="right" />
					</div>
					<div className="d-flex justify-content-start align-items-center ml-3"  style={{width: '60%'}}>
						<div className={style.name}>
							<h6>Hello, I am</h6>
							<h1>Niño Espina</h1>
							<p>Welcome to my personal website. If you are interested of my works, please feel free to contact me.</p>
							<Link to="/contact"> 
								<i className="fas fa-phone-volume mr-2" style={{color: '#045965'}}></i>Contact
							</Link>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Intro;