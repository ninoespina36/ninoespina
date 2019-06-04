import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import style from './about.module.scss';

const About = () =>{
	return(
		<Container className="mt-5">	
			<Row className="flex-column-reverse flex-lg-row">
				<Col 
					lg={4}
					className="d-flex justify-content-center align-items-end">
					<img src="./images/me.png" alt="" className={style.myself} />
				</Col>
				<Col 
					lg={8}
					className="mt-lg-5 mb-5">
					<h1 className={style.page_title}>About Me</h1>

					<p className="mt-4">My name is <b>Niño Christopher Tatad Espina</b>, a fresh graduate from Holy Name University Tagbilaran, City  Bohol, Philippines. I am passionate about Web Designing ang Web Developing. </p>

					<p>I am not the best designer or a developer at my school, I am not even a top student in our class, I did not win any academic contest. I believe that success doesn’t define being the best at someone or something but being passionate of your masterpiece. I am not yet sucessful in life, but someday I am hoping my passion will bring me to success. Don’t let dreams be dreams. </p>

					<div className={style.social_icons}>
						<a 
							href="https://www.facebook.com/nino.espina1998" 
							target="_blank"
							rel="noopener noreferrer">
							
							<i className="fab fa-facebook"></i>
						</a>
						<a 
							href="https://www.youtube.com/channel/UCoHmjybDYkh1Q0hwJ7wVG7Q" 
							target="_blank"
							rel="noopener noreferrer">

							<i className="fab fa-youtube"></i>
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
	);
}

export default About;