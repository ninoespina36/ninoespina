import React from 'react';
import { Container,Row,Col }  from 'react-bootstrap';
import style from './skills.module.scss';

const Skills  = (props) =>{

	const images = [
		{
			icon: 'fas fa-code',
			title: 'Web Developing',
			backgroundImage: 'url("/images/webdev.png")'
		},
		{
			icon: 'fas fa-pen-nib',
			title: 'Graphic Designing',
			backgroundImage: 'url("/images/graphicdesign.png")'
		},
		{
			icon: 'fas fa-camera-retro',
			title: 'Multimedia Editing',
			backgroundImage: 'url("/images/media.png")'
		},
	]

	const SkillsItem = images.map((item,index)=>{
		return(
			<Col 
				key={index}
				lg={3}
				md={4}>
				<div className={style.skill_item} style={{backgroundImage:item.backgroundImage}}>
					<div>
						<i className={item.icon}></i>

						<br />
						<br />

						<span>{item.title}</span>
					</div>
				</div>
			</Col>
		);
	})

	return(
		<div style={props.bg}>
			<Container>
				<Row>
					<Col align="center" className={style.skills_title}>
						<h4>My Major Skills</h4>	
					</Col>
				</Row>
				<Row className="justify-content-center">
					{SkillsItem}
				</Row>
			</Container>
		</div>
	);
}

export default Skills;

