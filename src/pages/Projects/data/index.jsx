import React from 'react';
import JSONComponent from '../../../components/JSONComponent';
import Loader from '../../../components/Loader';
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

const ReactCertificate = () => {
	return (
		<>
			<JSONComponent
				content={[
					{ name: 'Advanced React' },
					{ by: 'Meta' },
					{ recieved: 'April 08, 2023' },
					{
						id: 'Show Credentials',
						link: true,
						to: 'https://coursera.org/verify/HC3MN6MF9UXN',
					},
				]}
			/>
		</>
	);
};
const FrontEndCertificate = () => {
	return (
		<>
			<JSONComponent
				content={[
					{ name: 'FrontEnd with React' },
					{ by: 'IBM - Coursera' },
					{ recieved: 'April 07, 2023' },
					{
						id: 'Show Credentials',
						link: true,
						to: 'https://coursera.org/verify/RDCGFDH8FHHP',
					},
				]}
			/>
		</>
	);
};
const BackendCertificate = () => {
	return (
		<>
			<JSONComponent
				content={[
					{ name: 'BackEnd with Node.js & Express' },
					{ by: 'IBM - Coursera' },
					{ recieved: 'April 09, 2023' },
					{
						id: 'Show Credentials',
						link: true,
						to: 'https://coursera.org/verify/VE3F9C2JDQDY',
					},
				]}
			/>
		</>
	);
};
const CyberSecurity = () => {
	return (
		<>
			<JSONComponent
				content={[
					{ name: 'Cybersecurity' },
					{ by: 'Bytewise' },
					{ recieved: 'June, 2023' },
					{
						id: 'Show Credentials',
						link: true,
						to: 'https://certificate.givemycertificate.com/c/774d233a-63ff-4719-bed1-5a46984aecde',
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
				fileName: 'React',
				fileContent: ReactCertificate,
			},
			{
				fileName: 'FrontEnd',
				fileContent: FrontEndCertificate,
			},
			{
				fileName: 'Backend',
				fileContent: BackendCertificate,
			},
			// {
			// 	fileName: 'CyberSecurity',
			// 	fileContent: CyberSecurity,
			// },
		],
	},
];

export default data;
