import { useState } from 'react';

const useFileActive = () => {
	const initialFile = {
		sectionIndex: null,
		activeIndex: null,
		fileName: '',
		fileContent: '',
		fileIcon: null,
		fileType: 'Text',
		icon: null,
	};
	const [file, setActiveFile] = useState(initialFile);
	const handleFileClick = (
		sectionIndex,
		activeIndex,
		fileName,
		fileContent,
		fileType,
		icon
	) => {
		if (activeIndex !== file.activeIndex || sectionIndex !== file.sectionIndex) {
			setActiveFile({
				sectionIndex,
				activeIndex,
				fileName,
				fileContent,
				fileType,
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
