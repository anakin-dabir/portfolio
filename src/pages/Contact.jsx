import { useEffect, useRef, useState } from 'react';
import File from '../assets/mac.png';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Test from '../Test';

const Contact = () => {
	const [isActive, setActive] = useState(true);
	const accordionItems = [
		{ title: 'Personal Info', content: 'Content for Item 1' },
		{ title: 'Contacts', content: 'Content for Item 2' },
	];

	return (
		<>
			<div className='flex justify-between flex-1 flex-col md:flex-row h-full w-full px-2 py-4'>
				<div className='w-full border border-borderColor border-collapse md:w-1/3 lg:w-[25%] 2xl:w-[18%]  gap-1 md:gap-[3px] flex flex-col  md:px-0 sticky'>
					<Accordion items={accordionItems} />
				</div>
				<div
					className={`overflow-hidden border border-borderColor border-collapse flex flex-1 flex-col pt-4 md:pt-0  transition-opacity ${
						isActive ? 'opacity-1' : 'opacity-0'
					}`}>
					<div className='h-11 flex text-textInactive'>
						<div className='px-10  flex items-center bg-dark border-b border-borderColor '>profile-info</div>
					</div>
					<div className='bg-dark flex-1  px-5 py-6'>
						<SyntaxHighlighter>
							{`
This is Elon Musk
`}
						</SyntaxHighlighter>
						{/* <Test /> */}
					</div>
				</div>
			</div>
			{/* <button onClick={() => setActive((prev) => !prev)}>Btun</button> */}
		</>
	);
};

export default Contact;

const SideBarContent = ({ title, content, onClick, isActive }) => {
	// const [active, setActive] = useState(false);
	const contentRef = useRef(null);
	// const toggleAccordion = () => {
	// 	setActive(!active);
	// 	if (contentRef.current) {
	// 		contentRef.current.style.maxHeight = active ? '0px' : `${contentRef.current.scrollHeight}px`;
	// 	}
	// };

	return (
		<div className='w-full flex flex-col'>
			<button onClick={onClick} className={`items-center  bg-borderColor/80 px-5  h-10  w-full  flex`}>
				<div className={`${isActive ? 'text-textActive' : 'hover:text-textActive'} transition-colors box-center`}>
					{isActive ? <FileIcon opened /> : <FileIcon />}
					<p className='pl-3'>{title}</p>
				</div>
			</button>
			<div
				ref={contentRef}
				className={`overflow-hidden mb-[3px] bg-dark transition-all  ${isActive ? 'max-h-40' : 'max-h-0'}`}>
				<div className='flex flex-col py-3 pl-5'>
					<div className='flex gap-2 items-center'>
						{/* <svg
							width='24px'
							height='24px'
							viewBox='0 0 512 512'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							xmlns:xlink='http://www.w3.org/1999/xlink'
							fill='#43D9AD'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<title>txt-document</title>{' '}
								<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
									{' '}
									<g id='icon' className='fill-secondary' transform='translate(64.000000, 42.666667)'>
										{' '}
										<path
											d='M249.9584,7.10542736e-15 L15.2917333,7.10542736e-15 L15.2917333,234.666667 L57.9584,234.666667 L57.9584,192 L57.9584,169.6 L57.9584,42.6666667 L232.251733,42.6666667 L313.9584,124.373333 L313.9584,169.6 L313.9584,192 L313.9584,234.666667 L356.625067,234.666667 L356.625067,106.666667 L249.9584,7.10542736e-15 L249.9584,7.10542736e-15 Z M-1.42108547e-14,277.5744 L-1.42108547e-14,300.1664 L37.056,300.1664 L37.056,405.7024 L65.92,405.7024 L65.92,300.1664 L103.530667,300.1664 L103.530667,277.5744 L-1.42108547e-14,277.5744 Z M217.1712,277.5744 L186.9632,319.345067 L157.1392,277.5744 L123.581867,277.5744 L168.616533,339.9744 L121.2352,405.7024 L155.304533,405.7024 L185.533867,362.929067 L215.912533,405.7024 L250.7072,405.7024 L203.624533,340.699733 L250.173867,277.5744 L217.1712,277.5744 Z M269.2992,277.5744 L269.2992,300.1664 L306.376533,300.1664 L306.376533,405.7024 L335.240533,405.7024 L335.240533,300.1664 L372.829867,300.1664 L372.829867,277.5744 L269.2992,277.5744 Z'
											id='TXT'>
											{' '}
										</path>{' '}
									</g>{' '}
								</g>{' '}
							</g>
						</svg> */}
						<p>university</p>
					</div>
				</div>
			</div>
		</div>
	);
};
const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index) => {
		if (index === activeIndex) {
			// Clicking the same item again should close it.
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<div className='accordion'>
			{items.map((item, index) => (
				<SideBarContent
					key={index}
					title={item.title}
					content={item.content}
					isActive={index === activeIndex}
					onClick={() => handleItemClick(index)}
				/>
			))}
		</div>
	);
};

const FileIcon = ({ opened = false }) => {
	return opened ? (
		<svg
			fill='#43D9AD'
			width='20px'
			height='20px'
			viewBox='0 0 1920 1920'
			xmlns='http://www.w3.org/2000/svg'>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='m494.165 640.333-278.4 890.774 101.867 31.786L572.459 747h1211.306l-183.36 917.12c-5.013 24.853-26.986 42.88-52.266 42.88H159.979c-29.334 0-53.334-23.893-53.334-53.333v-1440h454.507L732.779 427h760.533v106.667h106.667V320.333H783.872L612.139 107H-.021v1546.667c0 88.213 71.786 160 160 160h1388.16c75.946 0 141.973-54.08 156.906-128.64l208.96-1044.694H494.165Z'
					fillRule='evenodd'></path>{' '}
			</g>
		</svg>
	) : (
		<svg
			fill='#43D9AD'
			width='20px'
			height='20px'
			viewBox='0 0 1920 1920'
			xmlns='http://www.w3.org/2000/svg'
			stroke='#43D9AD'>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='M1807.059 1637.706c0 31.172-25.412 56.47-56.47 56.47H169.411c-31.06 0-56.47-25.298-56.47-56.47V225.94h590.907L854.4 451.824H225.882v112.94H1807.06v1072.942ZM990.269 451.824 764.385 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V451.824H990.268Z'
					fillRule='evenodd'></path>{' '}
			</g>
		</svg>
	);
};
