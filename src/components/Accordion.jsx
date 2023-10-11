import useActiveIndex from '../hooks/useActiveIndex';
import SideBarContent from './SideBarContent';

const Accordion = ({ items, handleFileClick, file }) => {
	const { activeIndex, handleItemClick } = useActiveIndex();

	return (
		<div className='accordion'>
			{items.map((item, index) => (
				<SideBarContent
					key={index}
					title={item.title}
					content={item.content}
					isActive={index === activeIndex}
					onClick={() => handleItemClick(index)}
					handleFileClick={handleFileClick}
					file={file}
					index={index}
				/>
			))}
		</div>
	);
};
export default Accordion;
