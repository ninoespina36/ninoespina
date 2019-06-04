import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import style from './skills.module.scss';

const Skills = () =>{

	const skillNames = [
		{
			name: 'html',
			title: 'HTML 5',
			alt: 'html',
			level: 'Advanced',
			color: '#fff',
			background_color: '#f16529'
		},
		{
			name: 'css',
			title: 'CSS 3',
			alt: 'css',
			level: 'Advanced',
			color: '#fff',
			background_color: '#2fa9dc'
		},
		{
			name: 'bootstrap',
			title: 'Bootstrap 4',
			alt: 'bootstrap',
			level: 'Advanced',
			color: '#fff',
			background_color: '#6f44a4'
		},
		{
			name: 'react',
			title: 'React.js',
			alt: 'react',
			level: 'Beginner',
			color: '#fff',
			background_color: '#222222'
		},
		{
			name: 'jquery',
			title: 'JQuery',
			alt: 'jquery',
			level: 'Intermediate',
			color: '#fff',
			background_color: '#0769ad'
		},
		{
			name: 'codeigniter',
			title: 'Codeigniter',
			alt: 'codeigniter',
			level: 'Intermediate',
			color: '#fff',
			background_color: '#3b3b3b'
		},
		{
			name: 'laravel',
			title: 'Laravel',
			alt: 'laravel',
			level: 'Intermediate',
			color: '#000',
			background_color: '#f1f1f1'
		},
		{
			name: 'ps',
			title: 'Photoshop',
			alt: 'ps',
			level: 'Advanced',
			color: '#fff',
			background_color: '#272441'
		},
		{
			name: 'ai',
			title: 'Illustrator',
			alt: 'ai',
			level: 'Beginner',
			color: '#fff',
			background_color: '#451e17'
		},
		{
			name: 'pr',
			title: 'Premiere Pro',
			alt: 'pr',
			level: 'Advanced',
			color: '#fff',
			background_color: '#2c1235'
		},
		{
			name: 'ae',
			title: 'After Effects',
			alt: 'ae',
			level: 'Beginner',
			color: '#fff',
			background_color: '#1f0040'
		},
		{
			name: 'au',
			title: 'Audition',
			alt: 'au',
			level: 'Beginner',
			color: '#fff',
			background_color: '#002623'
		},		
		{
			name: 'lr',
			title: 'Lightroom',
			alt: 'lr',
			level: 'Intermediate',
			color: '#fff',
			background_color: '#16232b'
		},
	]

	const skillItems = skillNames.map((item,i)=>{
		return(
	    	<li key={i}>
				<div style={{backgroundColor:item.background_color,color: item.color}} className={style.skill_item}>
					<img alt="" src={`./images/${item.name}.png`} />
					<h6>{item.title}</h6>
					<p>Level: <b style={{color: item.color}}>{item.level}</b></p>
				</div>
			</li>
		)
	})
	

	return(
		<Container className="mt-5">
			<Row>
				<Col align="center" className="mt-lg-5 mt-3">
					<h1 className={style.page_title}>My Skills</h1>
				</Col>					
			</Row>
			<Row>
				<Col 
					lg={12} 
					md={12} 
					sm={12}
					align="center">

					<ul className={style.skills_list}>
						{skillItems}
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default Skills;