import { NameIcon } from '../../components/Icons';

const Comp = () => {
	return `this`;
};
const data = [
	{
		title: 'Personal Info',
		content: [
			{
				fileName: 'Personal Info',
				fileContent: 'Hi',
				icon: NameIcon,
			},
		],
	},
	{
		title: 'Contacts',
		content: [
			{ fileName: 'Personal Info', fileContent: 'Hui' },
			{ fileName: 'DOB', fileContent: '' },
			{ fileName: 'Comp', fileContent: Comp, fileType: 'Component' },
		],
	},
];

export default data;
