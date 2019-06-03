import React from 'react';

import Intro from './Intro/intro';
import Skills from './Skills/skills';

const Home = () =>{
	return(	
		<>
			<Intro />
			<Skills bg={{background:'#f4f4f4'}} />
		</>
	);
}

export default Home;