import { useState } from 'react';

const useFileActive = () => {
	const initialFile = {
		sectionIndex: null,
		activeIndex: null,
		fileName: '',
		fileContent: '',
		fileIcon: null,
		fileType: 'Text',
	};
	const [file, setActiveFile] = useState(initialFile);
	const handleFileClick = (
		sectionIndex,
		activeIndex,
		fileName,
		fileContent,
		fileIcon,
		fileType
	) => {
		if (activeIndex !== file.activeIndex || sectionIndex !== file.sectionIndex) {
			setActiveFile({
				sectionIndex,
				activeIndex,
				fileName,
				fileContent,
				fileIcon,
				fileType,
			});
		}
	};
	const removeActiveFile = () => {
		setActiveFile(initialFile);
	};

	return { handleFileClick, file, removeActiveFile };
};

export default useFileActive;
