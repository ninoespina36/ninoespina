import React from 'react';

import Intro from './Intro/intro';
import Skills from './Skills/skills';

const Home = () =>{
	return(	
		<>
			<Intro />
			<Skills bg={{background:'#f5f5f5'}} />
		</>
	);
}

export default Home;