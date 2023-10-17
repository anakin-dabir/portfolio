import { useState, useEffect } from 'react';

const BottomBar = ({ open, setOpen, formData, setFormData, setError }) => {
	const [data, setdata] = useState(null);
	const updateTime = () => {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
		const amOrPm = hours >= 12 ? 'PM' : 'AM';
		const formattedHours = hours % 12 || 12;
		const timeString = `[${formattedHours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amOrPm}]`;
		return timeString;
	};
	useEffect(() => {
		let firstInterval, secondInterval;
		setdata(
			<div className='flex md:gap-8 flex-col md:flex-row'>
				<div>{updateTime()}</div>
				<div className='text-textActive'>Sending your message...</div>
			</div>
		);
		if (open) {
			firstInterval = setTimeout(() => {
				setdata((pre) => (
					<>
						{pre}
						<div className='flex md:gap-8 flex-col md:flex-row w-full'>
							<div className='shrink-0'>{updateTime()}</div>
							<div className='flex flex-col'>
								<div>{'{'}</div>
								<div className='flex '>
									<span className='text-primary'>name:</span>
									<span className='text-secondary '>{` "${formData.name}",`}</span>
								</div>
								<div className='flex'>
									<span className='text-primary'>email:</span>
									<span className='text-secondary '>{` "${formData.email}",`}</span>
								</div>
								<div className='flex'>
									<span className='text-primary'>message:</span>
									<span className='text-secondary overflow-y-auto '>{` "${formData.message}",`}</span>
								</div>
								<div>{'}'}</div>
							</div>
						</div>
					</>
				));
			}, 2000);

			secondInterval = setTimeout(() => {
				setdata((pre) => (
					<>
						{pre}
						<div className='flex md:gap-8 flex-col md:flex-row'>
							<div>{updateTime()}</div>
							<div className='text-textActive'>Sent 👍, Developer will be in touch shortly. </div>
						</div>
					</>
				));
				setFormData({ name: '', email: '', message: '' });
				setError({ name: true, email: true, message: true });
			}, 3000);
		}
		return () => {
			clearInterval(firstInterval);
			clearInterval(secondInterval);
		};
	}, [open]);

	return (
		<>
			<div
				className={`z-[60] bg-borderColor/80 backdrop-blur-md transition-transform fixed left-0 right-0 bottom-0 w-full overflow-y-auto ${
					open ? '-translate-y-0' : 'translate-y-full'
				}`}>
				<div className='flex items-start justify-center flex-col text-textInactive gap-4 p-5 md:px-10 lg:px-40 w-full'>
					{data}
				</div>
			</div>
			{open && (
				<div className='fixed inset-0 z-50' onClick={() => setOpen((pre) => !pre)}>
					<div className='fixed inset-0 bg-black opacity-60'></div>
				</div>
			)}
		</>
	);
};

export default BottomBar;
