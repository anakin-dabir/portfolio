import Lottie from 'lottie-react';
import Sleeping from '../assets/hui.json';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className='gap-8 h-64 w-64 box-center flex-col mt-14 md:mt-0 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2'>
			<Lottie animationData={Sleeping} />
			<Link to='/'>
				<div className='flex items-center gap-4'>
					<svg
						className='h-12 w-12 fill-textInactive'
						version='1.1'
						id='Capa_1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						viewBox='0 0 39.434 39.434'
						xmlSpace='preserve'>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<g>
								{' '}
								<path d='M39.434,20.718c0,1.104-0.896,2-2,2c-0.005,0-0.012,0-0.021,0h-3.706v0.249c0,0.206-0.04,0.399-0.099,0.587v9.801 c0,1.104-0.896,2-2,2h-6.567c-1.104,0-2-0.896-2-2v-5.638c0-1.838-1.496-3.333-3.333-3.333c-1.838,0-3.334,1.495-3.334,3.333v5.638 c0,1.104-0.896,2-2,2H7.806c-1.104,0-2-0.896-2-2V22.718H2.001c-0.844,0-1.598-0.528-1.883-1.322 c-0.284-0.795-0.043-1.682,0.607-2.22L18.432,4.538c0.74-0.611,1.808-0.611,2.548,0l5.477,4.526V8.966c0-1.104,0.896-2,2-2h3.25 c1.104,0,2,0.896,2,2v6.091l4.817,3.983C39.071,19.398,39.434,20.016,39.434,20.718z'></path>{' '}
							</g>{' '}
						</g>
					</svg>
				</div>
			</Link>
		</div>
	);
};

export default Error;
