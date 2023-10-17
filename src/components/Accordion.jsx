import SideBarContent from './SideBarContent';
import { useState } from 'react';

const Accordion = ({ items, handleFileClick, file }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemClick = (index) => {
		if (index === activeIndex) {
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
					handleFileClick={handleFileClick}
					file={file}
					index={index}
				/>
			))}
		</div>
	);
};
export default Accordion;
