import JSONComponent from '../../components/JSONComponent';

const PersonalInfo = () => {
	return 'This';
};
const College = () => {
	return (
		<JSONComponent
			content={[{ college: 'Punjab College' }, { duration: '(2019-2021)' }, { grade: 'A+' }]}
		/>
	);
};
const University = () => {
	return (
		<JSONComponent
			content={[{ university: 'University of the Punjab' }, { duration: '(2021-2025)' }, { grade: 'A+' }]}
		/>
	);
};
const data = [
	{
		title: 'Personal Info',
		content: [
			{
				fileName: 'info',
				fileContent: PersonalInfo,
			},
		],
	},
	{
		title: 'Education',
		content: [
			{
				fileName: 'college',
				fileContent: College,
			},
			{ fileName: 'university', fileContent: University },
		],
	},
	// {
	// 	title: 'Experience',
	// 	content: [{ fileName: 'internship', fileContent: 'DevFum ---- 2023' }],
	// },
];

export default data;
