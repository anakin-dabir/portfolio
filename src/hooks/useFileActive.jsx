import { useState } from 'react';

const useFileActive = () => {
	const initialFile = {
		sectionIndex: null,
		activeIndex: null,
		fileName: '',
		fileContent: '',
	};
	const [file, setActiveFile] = useState(initialFile);
	const handleFileClick = (sectionIndex, activeIndex, fileName, fileContent) => {
		if (activeIndex !== file.activeIndex || sectionIndex !== file.sectionIndex) {
			setActiveFile({ sectionIndex, activeIndex, fileName, fileContent });
		}
	};
	const removeActiveFile = () => {
		setActiveFile(initialFile);
	};

	return { handleFileClick, file, removeActiveFile };
};

export default useFileActive;
