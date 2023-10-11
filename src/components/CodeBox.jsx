import SyntaxHighlighter from './SyntaxHighlighter';

const CodeBox = ({ name = 'personal-info', content = 'hui', setActive }) => {
	return (
		<>
			<div className='h-11 flex text-textInactive'>
				<div className='px-4 flex gap-1 items-center bg-dark border-b border-borderColor [&>*]:hover:opacity-100'>
					<svg
						width='24px'
						height='24px'
						viewBox='0 0 512 512'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlns:xlink='http://www.w3.org/1999/xlink'
						fill='#607B96'>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<title>txt-document</title>{' '}
							<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
								{' '}
								<g id='icon' fill='#607B96' transform='translate(64.000000, 42.666667)'>
									{' '}
									<path
										d='M249.9584,7.10542736e-15 L15.2917333,7.10542736e-15 L15.2917333,234.666667 L57.9584,234.666667 L57.9584,192 L57.9584,169.6 L57.9584,42.6666667 L232.251733,42.6666667 L313.9584,124.373333 L313.9584,169.6 L313.9584,192 L313.9584,234.666667 L356.625067,234.666667 L356.625067,106.666667 L249.9584,7.10542736e-15 L249.9584,7.10542736e-15 Z M-1.42108547e-14,277.5744 L-1.42108547e-14,300.1664 L37.056,300.1664 L37.056,405.7024 L65.92,405.7024 L65.92,300.1664 L103.530667,300.1664 L103.530667,277.5744 L-1.42108547e-14,277.5744 Z M217.1712,277.5744 L186.9632,319.345067 L157.1392,277.5744 L123.581867,277.5744 L168.616533,339.9744 L121.2352,405.7024 L155.304533,405.7024 L185.533867,362.929067 L215.912533,405.7024 L250.7072,405.7024 L203.624533,340.699733 L250.173867,277.5744 L217.1712,277.5744 Z M269.2992,277.5744 L269.2992,300.1664 L306.376533,300.1664 L306.376533,405.7024 L335.240533,405.7024 L335.240533,300.1664 L372.829867,300.1664 L372.829867,277.5744 L269.2992,277.5744 Z'
										id='TXT'>
										{' '}
									</path>{' '}
								</g>{' '}
							</g>{' '}
						</g>
					</svg>

					<p>{name}</p>
					<button
						onClick={() => setActive((prev) => !prev)}
						className='pl-3 pt-3 text-2xl hover:text-textActive opacity-0 transition-colors'>
						˟
					</button>
				</div>
			</div>
			<div className='bg-dark flex-1 px-3 py-5'>
				<SyntaxHighlighter>{content}</SyntaxHighlighter>
			</div>
		</>
	);
};

export default CodeBox;
