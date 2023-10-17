import React from 'react';
import JSONComponent from '../../components/JSONComponent';
import Loader from '../../components/Loader';
const Skills = React.lazy(() => import('./Skills'));

const SkillsData = ({ height }) => {
	return (
		<>
			<div style={{ height: height }} className='overflow-y-auto relative'>
				<React.Suspense fallback={<Loader absolute />}>
					<Skills />
				</React.Suspense>
			</div>
		</>
	);
};

const Certificates = () => {
	return (
		<>
			<JSONComponent
				content={[
					{ name: 'Advanced React' },
					{ by: 'Meta' },
					{ completed: 'April 08, 2023' },
					{
						verify: 'https://coursera.org/verify/HC3MN6MF9UXN',
						link: true,
						to: 'https://coursera.org/verify/HC3MN6MF9UXN',
					},
				]}
			/>
		</>
	);
};

const data = [
	{
		title: 'Skills',
		content: [
			{
				fileName: 'skills',
				fileContent: SkillsData,
			},
		],
	},
	{
		title: 'Certifications',
		content: [
			{
				fileName: 'Advanced React',
				fileContent: Certificates,
			},
		],
	},
];

export default data;
