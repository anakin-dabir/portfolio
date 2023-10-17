import { PhoneIcon, AtRateIcon, LocationIcon, EarthIcon } from './icons/Icons';
import { CopyIcon } from '../../components/Icons';
import Form from '../../components/Form';
import CopyComponent from '../../components/CopyComponent';

const Email = () => {
	return (
		<CopyComponent>
			<p>{'{'}</p>
			<p className='text-primary'>
				email: <span className='text-secondary'>anakindabir@gmail.com</span>
			</p>
			<p>{'}'}</p>
		</CopyComponent>
	);
};
const Phone = () => {
	return (
		<CopyComponent>
			<p>+92-3094998057</p>
		</CopyComponent>
	);
};
const Location = () => {
	return (
		<CopyComponent>
			<div className='flex'>
				<p>Earth</p>
				<EarthIcon />
			</div>
		</CopyComponent>
	);
};

const data = [
	{
		title: 'Message me',
		content: [{ fileName: 'form', fileContent: Form }],
	},
	{
		title: 'Contacts',
		content: [
			{ fileName: 'email', fileContent: Email, icon: AtRateIcon },
			{ fileName: 'phone', fileContent: Phone, icon: PhoneIcon },
			{ fileName: 'location', fileContent: Location, icon: LocationIcon },
		],
	},
];

export default data;
