import {
	PhoneIcon,
	AtRateIcon,
	LocationIcon,
	EarthIcon,
} from '../../components/Icons';
import Form from '../../components/Form';

const data = [
	{
		title: 'Message me',
		content: [{ fileName: 'form', fileContent: Form, fileType: 'Component' }],
	},
	{
		title: 'Contacts',
		content: [
			{ fileName: 'email', fileContent: `anakindabir@gmail.com`, icon: AtRateIcon },
			{ fileName: 'phone', fileContent: `+92-3094998057`, icon: PhoneIcon },
			{
				fileName: 'location',
				fileContent: `Earth`,
				icon: LocationIcon,
			},
		],
	},
];

export default data;
