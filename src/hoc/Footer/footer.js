import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import style from './footer.module.scss';

const Footer = () =>{
	return (
		<div className={style.footer}>
			<Container>
				<Row>
					<Col 
						lg={4}
						sm={12}
						className={style.social} align="center">
						Follow Me On:
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
				</Row>
			</Container>
		</div>
	)
}

export default Footer;