import { useState } from 'react';

const useFileActive = () => {
	const initialFile = {
		sectionIndex: null,
		activeIndex: null,
		fileName: '',
		fileContent: null,
		icon: null,
	};
	const [file, setActiveFile] = useState(initialFile);
	const handleFileClick = (sectionIndex, activeIndex, fileName, fileContent, icon) => {
		if (activeIndex !== file.activeIndex || sectionIndex !== file.sectionIndex) {
			setActiveFile({
				sectionIndex,
				activeIndex,
				fileName,
				fileContent,
				icon,
			});
		}
	};
	const removeActiveFile = () => {
		setActiveFile(initialFile);
	};

	return { handleFileClick, file, removeActiveFile };
};

export default useFileActive;
