import { NameIcon } from '../../components/Icons';

const NewComp = ({ height }) => {
	return (
		<div className='text-textInactive overflow-y-auto w-full' style={{ height: height }}>
			<div className='flex flex-col'>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
				<div>Punjab College ---- 2019-2021</div>
			</div>
		</div>
	);
};
const data = [
	{
		title: 'Personal Info',
		content: [
			{
				fileName: 'info',
				fileContent: `/*
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`,
			},
		],
	},
	{
		title: 'Education',
		content: [
			{
				fileName: 'college',
				fileContent: `Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021
Punjab College ---- 2019-2021`,
			},
			{ fileName: 'university', fileContent: NewComp },
		],
	},
	{
		title: 'Experience',
		content: [{ fileName: 'internship', fileContent: 'DevFum ---- 2023' }],
	},
];

export default data;
