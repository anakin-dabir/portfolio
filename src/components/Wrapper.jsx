import Footer from './Footer';
import TopBar from './TopBar';

const Wrapper = ({ children }) => {
	return (
		<div className='container relative overflow-hidden flex flex-col max-w-screen-2xl min-h-screen mx-auto w-screen'>
			<TopBar />
			{children}
			<Footer />
		</div>
	);
};

export default Wrapper;
