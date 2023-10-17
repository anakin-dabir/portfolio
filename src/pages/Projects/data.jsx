import React from 'react';
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

const data = [
	{
		title: 'Skills',
		content: [
			{
				fileName: 'skills',
				fileType: 'Component',
				fileContent: SkillsData,
			},
		],
	},
	{
		title: 'Projects',
		content: [{ fileName: 'Full Stack' }, { fileName: 'Front End' }, { fileName: 'html/css' }],
	},

	{
		title: 'Certifications',
		content: [{ fileName: 'skills' }],
	},
];

export default data;
