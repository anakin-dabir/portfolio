import { useState } from 'react';

const useActiveIndex = (initialIndex = 0) => {
	const [activeIndex, setActiveIndex] = useState(initialIndex);

	const handleItemClick = (index) => {
		if (index === activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	return { activeIndex, handleItemClick };
};

export default useActiveIndex;
