import CodeBox from '../components/CodeBox';
import useFileActive from '../hooks/useFileActive';
import Accordion from '../components/Accordion';
import { BgCodeBox } from '../components/Icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Contact = () => {
	const { handleFileClick, file, removeActiveFile } = useFileActive();
	const accordionItems = [
		{
			title: 'Personal Info',
			content: [{ fileName: 'Message->', fileContent: Form, fileType: 'Component' }],
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
	useEffect(() => {
		console.log({ formData });
	}, [formData]);
	return (
		<>
			<div
				className={'box-center w-full flex-col text-textInactive caret-primary'}
				style={{ height: height }}>
				<div className='border-4 border-dashed pl-4 border-borderColor h-60 box-center flex-col gap-4'>
					<div className='flex items-center gap-3'>
						<svg viewBox='0 0 24 24' className='w-10 h-10' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									d='M3.95442 10.166C4.04608 9.76202 3.79293 9.36025 3.38898 9.26859C2.98504 9.17693 2.58327 9.43009 2.49161 9.83403L3.95442 10.166ZM5.49981 4.73283C5.19117 5.00907 5.1649 5.48322 5.44115 5.79187C5.71739 6.10051 6.19154 6.12678 6.50019 5.85053L5.49981 4.73283ZM15 14.25C14.5858 14.25 14.25 14.5858 14.25 15C14.25 15.4142 14.5858 15.75 15 15.75L15 14.25ZM17.25 18.7083C17.25 19.1225 17.5858 19.4583 18 19.4583C18.4142 19.4583 18.75 19.1225 18.75 18.7083H17.25ZM5.25 18.7083C5.25 19.1225 5.58579 19.4583 6 19.4583C6.41421 19.4583 6.75 19.1225 6.75 18.7083H5.25ZM9 15L8.99998 15.75H9V15ZM11 15.75C11.4142 15.75 11.75 15.4142 11.75 15C11.75 14.5858 11.4142 14.25 11 14.25V15.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM3.75 12C3.75 11.3688 3.82074 10.7551 3.95442 10.166L2.49161 9.83403C2.33338 10.5313 2.25 11.2564 2.25 12H3.75ZM6.50019 5.85053C7.96026 4.54373 9.88655 3.75 12 3.75V2.25C9.50333 2.25 7.22428 3.1894 5.49981 4.73283L6.50019 5.85053ZM14.25 9C14.25 10.2426 13.2426 11.25 12 11.25V12.75C14.0711 12.75 15.75 11.0711 15.75 9H14.25ZM12 11.25C10.7574 11.25 9.75 10.2426 9.75 9H8.25C8.25 11.0711 9.92893 12.75 12 12.75V11.25ZM9.75 9C9.75 7.75736 10.7574 6.75 12 6.75V5.25C9.92893 5.25 8.25 6.92893 8.25 9H9.75ZM12 6.75C13.2426 6.75 14.25 7.75736 14.25 9H15.75C15.75 6.92893 14.0711 5.25 12 5.25V6.75ZM15 15.75C15.6008 15.75 16.1482 16.0891 16.5769 16.6848C17.0089 17.2852 17.25 18.0598 17.25 18.7083H18.75C18.75 17.7371 18.4052 16.6575 17.7944 15.8086C17.1801 14.9551 16.2275 14.25 15 14.25L15 15.75ZM6.75 18.7083C6.75 18.0598 6.99109 17.2852 7.42315 16.6848C7.85183 16.0891 8.39919 15.75 8.99998 15.75L9.00002 14.25C7.77253 14.25 6.81989 14.9551 6.20564 15.8086C5.59477 16.6575 5.25 17.7371 5.25 18.7083H6.75ZM9 15.75H11V14.25H9V15.75Z'
									fill='#607B96'></path>{' '}
							</g>
						</svg>
						<label htmlFor='name'>Name......</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='{Enter}'
							value={formData.name}
							className='w-full  rounded-md '
							onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
						/>
					</div>
					<div className='flex items-center gap-3'>
						<svg viewBox='0 0 24 24' className='w-10 h-10' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									d='M15.8571 12C15.8571 14.1303 14.1302 15.8572 12 15.8572C9.86972 15.8572 8.14282 14.1303 8.14282 12C8.14282 9.86979 9.86972 8.14288 12 8.14288C14.1302 8.14288 15.8571 9.86979 15.8571 12ZM15.8571 12L15.8571 13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 9.3345 19.8412 6.93964 18 5.29168M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868'
									stroke='#607B96'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'></path>{' '}
							</g>
						</svg>
						<label htmlFor='email'>Email.....</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='{Enter}'
							value={formData.email}
							className='w-full  rounded-md '
							onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
						/>
					</div>
					<div className='flex items-start gap-3 w-full'>
						<svg viewBox='0 0 24 24' className='w-10 h-10 -mt-2' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' stroke='#CCCCCC' stroke-width='0.048'></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path d='M7 18.5V21L12 16H20V10M7 16H4V4H20V6' stroke='#607B96' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>{' '}
							</g>
						</svg>
						<label htmlFor='message'>Message...</label>
						<textarea
							name='name'
							id='name'
							placeholder='{Enter}'
							value={formData.message}
							className='w-full rounded-md resize-none'
							onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
