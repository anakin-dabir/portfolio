import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));
import Test from './Test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Loader from './components/Loader';
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Wrapper>
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/*' element={<Test />} />
						</Routes>
					</Suspense>
				</Wrapper>
			</BrowserRouter>
		</>
	);
};
export default App;
