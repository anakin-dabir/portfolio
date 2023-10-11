const SideBarContent = ({
	title,
	content,
	onClick,
	isActive,
	handleFileClick,
	file,
	index,
}) => {
	return (
		<div className='w-full flex flex-col'>
			<button onClick={onClick} className={`items-center  bg-borderColor/80 px-3  h-10  w-full  flex`}>
				<div className={`${isActive ? 'text-textActive' : 'hover:text-textActive'}  transition-colors box-center`}>
					{isActive ? <FileIcon opened /> : <FileIcon />}
					<p className='pl-3'>{title}</p>
				</div>
			</button>
			<div
				className={`overflow-hidden mb-[3px] bg-dark transition-all  ${isActive ? 'max-h-40' : 'max-h-0'}`}>
				<div className='flex flex-col gap-4 py-3 pl-3'>
					{content.map((content, i) => {
						return (
							<button
								key={i}
								onClick={() => handleFileClick(index, i, content.fileName, content.fileContent)}
								className={`flex gap-2 items-center text-sm ${
									index === file.sectionIndex && file.activeIndex === i ? 'text-textActive' : 'text-textInactive'
								}`}>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 512 512'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									fill='#607B96'>
									<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
									<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
									<g id='SVGRepo_iconCarrier'>
										{' '}
										<title>txt-document</title>{' '}
										<g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
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
								<p>{content.fileName}</p>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default SideBarContent;
