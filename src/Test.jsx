import React from 'react';
import Lottie from 'lottie-react';
import Sleeping from './assets/hui.json';

const Test = () => {
	return (
		<div>
			<div className='h-96 w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<Lottie animationData={Sleeping} />
			</div>
			{/* <div class='running'>
				<div class='outer'>
					<div class='body'>
						<div class='arm front'></div>
						<div class='arm front'></div>
						<div class='leg front'></div>
						<div class='leg front'></div>
						<div class='leg front'></div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Test;
