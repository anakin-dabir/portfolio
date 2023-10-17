import React, { useRef, useState } from 'react';

const CopyComponent = ({ children }) => {
	const [copied, setCopied] = useState(false);
	const ref = useRef(null);
	const handleCopy = () => {
		const textToCopy = Array.from(ref.current.querySelectorAll('.cpy'))
			.map((cpyElement) => cpyElement.textContent)
			.join(' ');
		navigator.clipboard.writeText(textToCopy);
		setCopied((pre) => !pre);
	};
	return (
		<>
			<div className='box-center gap-4 flex-wrap-reverse'>
				<div ref={ref}>{children}</div>
				{!copied ? (
					<button onClick={handleCopy} className='group relative z-50 h-6 w-6 active:scale-90'>
						<svg
							className='h-6 w-6 stroke-textInactive group-hover:stroke-textActive transition-colors'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
							<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									d='M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'></path>{' '}
								<path
									opacity='0.4'
									d='M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'></path>{' '}
							</g>
						</svg>
					</button>
				) : (
					<button disabled className='group relative'>
						<svg className='h-6 w-6 stroke-textInactive' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
							<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									opacity='0.4'
									d='M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'></path>{' '}
								<path
									d='M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'></path>{' '}
								<path d='M6.08008 14.9998L8.03008 16.9498L11.9201 13.0498' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>{' '}
							</g>
						</svg>
					</button>
				)}
			</div>
		</>
	);
};

export default CopyComponent;
