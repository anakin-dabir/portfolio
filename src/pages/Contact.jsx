import CodeBox from '../components/CodeBox';
import useFileActive from '../hooks/useFileActive';
import Accordion from '../components/Accordion';
import {
	BgCodeBox,
	MessageIcon,
	NameIcon,
	EmailIcon,
} from '../components/Icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Contact = () => {
	const { handleFileClick, file, removeActiveFile } = useFileActive();
	const accordionItems = [
		{
			title: 'Personal Info',
			content: [{ fileName: 'message-me', fileContent: Form, fileType: 'Component' }],
		},
	];

	return (
		<>
			<div className='flex justify-between flex-1 flex-col md:flex-row h-full w-full px-2 pt-1 pb-4 md:px-0 md:pb-1'>
				<div className='w-full border border-borderColor border-collapse md:w-1/3 lg:w-[25%] 2xl:w-[18%]  gap-1 md:gap-[3px] flex flex-col  md:px-0 sticky'>
					<Accordion items={accordionItems} handleFileClick={handleFileClick} file={file} />
				</div>
				<div className='border border-borderColor border-collapse flex flex-1 flex-col mt-2 md:mt-0 relative'>
					{file.activeIndex == null ? (
						<BgCodeBox variant='Contact' />
					) : (
						<CodeBox file={file} removeActiveFile={removeActiveFile} />
					)}
				</div>
			</div>
		</>
	);
};

export default Contact;

const Form = ({ height }) => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [open, setOpen] = useState(false);
	const [error, setError] = useState({ name: true, email: true, message: true });
	const submitForm = (e) => {
		e.preventDefault();
		setOpen(true);
	};
	const handleChange = (e) => {
		const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
		const { name, value } = e.target;
		if (name === 'name') {
			if (value !== '') setError((pre) => ({ ...pre, name: false }));
			else setError((pre) => ({ ...pre, name: true }));
		} else if (name === 'email') {
			if (emailTest.test(value)) setError((pre) => ({ ...pre, email: false }));
			else setError((pre) => ({ ...pre, email: true }));
		} else {
			if (value !== '') setError((pre) => ({ ...pre, message: false }));
			else setError((pre) => ({ ...pre, message: true }));
		}

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		console.log({ error });
	}, [error]);

	return (
		<>
			<div
				className={'box-center w-full flex-col text-textInactive caret-primary'}
				style={{ height: height }}>
				<form
					autoComplete='off'
					onSubmit={submitForm}
					className='border-2 form rounded-xl overflow-hidden  border-dashed pl-4 border-borderColor box-center flex-col gap-6 p-4 pt-24 md:w-96 relative'>
					<div className='flex items-center gap-3  w-full'>
						<label htmlFor='name'>
							<NameIcon />
						</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='{Enter Name}'
							value={formData.name}
							className='w-full  rounded-md '
							onChange={handleChange}
						/>
					</div>
					<div className='flex items-center gap-3  w-full'>
						<label htmlFor='email'>
							<EmailIcon />
						</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='{Enter Email}'
							value={formData.email}
							className='w-full  rounded-md '
							onChange={handleChange}
						/>
					</div>
					<div className='flex items-start gap-3 w-full'>
						<label htmlFor='message'>
							<MessageIcon />
						</label>
						<textarea
							name='message'
							id='message'
							placeholder='{Enter Message}'
							value={formData.message}
							className='w-full rounded-md resize-none h-20'
							onChange={handleChange}
						/>
					</div>

					<button
						type='submit'
						className={`${
							error.message || error.name || error.message ? 'invisible' : 'visible'
						} box-center border border-dashed border-borderColor rounded-full p-3 w-32 self-start hover:bg-borderColor hover:text-dark focus:bg-borderColor transition-colors active:scale-95`}>
						Send
					</button>
				</form>
			</div>
			<BottomBar open={open} setOpen={setOpen} formData={formData} />
		</>
	);
};

const BottomBar = ({ open, setOpen, formData, setFormData, setError }) => {

	useEffect(() => {

	}, [])
	return (
		<>
			<div
				className={`z-[60] bg-borderColor/80 backdrop-blur-md transition-transform fixed left-0 bottom-0 w-full container mx-auto max-w-screen-2xl h-96 overflow-y-auto ${
					open ? '-translate-y-0' : 'translate-y-full'
				}`}>
				<div className='text-borderActive'>{JSON.stringify(formData)}</div>
			</div>
			{open && (
				<div class='fixed inset-0 z-50' onClick={() => setOpen((pre) => !pre)}>
					<div class='fixed inset-0 bg-black opacity-30'></div>
				</div>
			)}
		</>
	);
};
