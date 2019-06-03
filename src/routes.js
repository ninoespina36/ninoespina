import React from 'react';
import { Switch,Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './routes.scss';
import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Portfolio from './components/Portfolio/portfolio';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';

const Routes = () =>{
	return(
		<Layout>
			<Route render={({location})=>(
				<TransitionGroup>
					<CSSTransition key={location.key} timeout={300} classNames="transition">
						<Switch location={location}>
							<Route path="/" exact component={Home} />
							<Route path="/about" component={About} />
							<Route path="/skills" component={Skills} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/resume" component={Resume} />
							<Route path="/contact" component={Contact} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				)} />
		</Layout>
	);
}

export default Routes;
