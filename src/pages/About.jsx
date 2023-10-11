import { useEffect, useRef, useState } from 'react';
import File from '../assets/mac.png';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Test from '../Test';
import CodeBox from '../components/CodeBox';
import useActiveIndex from '../hooks/useActiveIndex';
import useFileActive from '../hooks/useFileActive';

const About = () => {
	const { handleFileClick, file, removeActiveFile } = useFileActive();
	const accordionItems = [
		{
			title: 'Personal Info',
			content: [
				{ fileName: 'Personal Info', fileContent: 'This is me the motherfucker' },
				{ fileName: 'DOB', fileContent: '' },
				{ fileName: 'DOB', fileContent: '' },
			],
		},
		{
			title: 'Contacts',
			content: [
				{ fileName: 'Personal Info', fileContent: 'Hui' },
				{ fileName: 'DOB', fileContent: '' },
			],
		},
	];

	return (
		<>
			<div className='flex justify-between flex-1 flex-col md:flex-row h-full w-full px-2 pt-1 pb-4 md:px-0 md:pb-1'>
				<div className='w-full border border-borderColor border-collapse md:w-1/3 lg:w-[25%] 2xl:w-[18%]  gap-1 md:gap-[3px] flex flex-col  md:px-0 sticky'>
					<Accordion items={accordionItems} handleFileClick={handleFileClick} file={file} />
				</div>
				<div className='border border-borderColor border-collapse flex flex-1 flex-col mt-2 md:mt-0 relative'>
					<div className={`transition-opacity ${file.activeIndex != null ? 'opacity-1' : 'opacity-0'}`}>
						{file.activeIndex != null && <CodeBox file={file} removeActiveFile={removeActiveFile} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default About;



const FileIcon = ({ opened = false }) => {
	return opened ? (
		<svg
			className='fill-primary stroke-primary h-[1.12rem] w-[1.12rem]'
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
			className='fill-primary stroke-primary h-[1.12rem] w-[1.12rem]'
			viewBox='0 0 1920 1920'
			xmlns='http://www.w3.org/2000/svg'>
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
