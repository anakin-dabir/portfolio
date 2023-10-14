import { FileIcon, TxtIcon } from './Icons';

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
			<button
				onClick={onClick}
				className={`items-center bg-borderColor/80 focus:bg-borderColor/80 px-3  h-10  w-full  flex`}>
				<div className={`${isActive ? 'text-textActive' : 'hover:text-textActive'} transition-colors box-center`}>
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
								onClick={() => handleFileClick(index, i, content.fileName, content.fileContent, content.fileType)}
								className={`flex gap-2 items-center text-sm ${
									index === file.sectionIndex && file.activeIndex === i ? 'text-textActive' : 'text-textInactive'
								}`}>
								<TxtIcon />
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
