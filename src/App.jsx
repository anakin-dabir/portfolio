import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Test from './Test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Wrapper>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/*' element={<Test />} />
					</Routes>
				</Wrapper>
			</BrowserRouter>
		</>
	);
};
export default App;
