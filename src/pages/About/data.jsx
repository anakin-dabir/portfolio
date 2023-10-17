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
				fileContent: null,
			},
		],
	},
	{
		title: 'Education',
		content: [
			{
				fileName: 'college',
				fileContent: null,
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
