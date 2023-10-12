import React from 'react';
import Lottie from 'lottie-react';
import Sleeping from './assets/hui.json';
import Loader from './components/Loader';

const Test = () => {
	return (
		<div>
			{/* <div className='bg-pink-200 w-96 h-96  fixed top-1/2 left-1/2 flex flex-col items-center justify-center  -translate-x-1/2 -translate-y-1/2'>
				<Lottie animationData={Sleeping} />
				<p className='text-3xl text-textInactive'>Developer is sleeping</p>
			</div> */}
			<Loader />
		</div>
	);
};

export default Test;
