import React from 'react';
import Loader from '../../components/Loader';
const Skills = React.lazy(() => import('./Skills'));

const SkillsData = ({ height }) => {
	return (
		<>
			<React.Suspense fallback={<Loader />}>
				<Skills height={height} />
			</React.Suspense>
		</>
	);
};

const data = [
	{
		title: 'Projects',
		content: [{ fileName: 'Full Stack' }, { fileName: 'Front End' }, { fileName: 'html/css' }],
	},
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
		title: 'Certifications1',
		content: [{ fileName: 'skills' }],
	},
];

export default data;
