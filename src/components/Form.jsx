import { NameIcon, EmailIcon, MessageIcon } from './Icons';
import BottomBar from './BottomBar';
import { useState } from 'react';

const Form = ({ height }) => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [open, setOpen] = useState(false);
	const [error, setError] = useState({ name: true, email: true, message: true });
	const submitForm = (e) => {
		e.preventDefault();
		setOpen(true);
	};
	const handleChange = (e) => {
		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
		const stringFilter = /<[^>]*>|<script[^>]*>.*<\/script>/i;
		const { name, value } = e.target;
		if (name === 'name') {
			if (value !== '' && !stringFilter.test(value)) setError((pre) => ({ ...pre, name: false }));
			else setError((pre) => ({ ...pre, name: true }));
		} else if (name === 'email') {
			if (emailRegex.test(value) && !stringFilter.test(value)) setError((pre) => ({ ...pre, email: false }));
			else setError((pre) => ({ ...pre, email: true }));
		} else {
			if (value !== '' && !stringFilter.test(value)) setError((pre) => ({ ...pre, message: false }));
			else setError((pre) => ({ ...pre, message: true }));
		}
		setFormData((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<>
			<div
				className={'box-center w-full flex-col text-textInactive caret-primary'}
				style={{ height: height }}>
				<form
					autoComplete='off'
					onSubmit={submitForm}
					className='border-2 bg-borderColor/20 form rounded-xl overflow-hidden  border-solid pl-4 border-borderColor box-center flex-col gap-6 sm:w-96 p-4 pt-24 md:w-[600px] md:px-10 relative'>
					<div className='w-full h-2 border-b border-b-borderColor absolute bottom-[80px]'></div>
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
							type='text'
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
							error.message || error.name || error.email ? 'invisible' : 'visible'
						} box-center border border-dashed border-borderColor -mb-2 rounded-full p-3 w-32 self-start hover:bg-borderColor hover:text-textActive focus:bg-borderColor transition-colors active:scale-95`}>
						Send
					</button>
				</form>
			</div>
			<BottomBar
				open={open}
				setOpen={setOpen}
				formData={formData}
				setFormData={setFormData}
				setError={setError}
			/>
		</>
	);
};

export default Form;
