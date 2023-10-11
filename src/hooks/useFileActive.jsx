import { useEffect, useState } from 'react';

const useFileActive = () => {
	const initialFile = {
		sectionIndex: null,
		activeIndex: null,
		fileName: '',
		fileContent: '',
	};
	const [file, setActiveFile] = useState(initialFile);
	useEffect(() => {
		console.log(file);
	}, [file]);

	const handleFileClick = (sectionIndex, activeIndex, fileName, fileContent) => {
		if (activeIndex !== file.activeIndex) {
			setActiveFile({ sectionIndex, activeIndex, fileName, fileContent });
		}
	};
	const removeActiveFile = () => {
		setActiveFile(initialFile);
	};

	return { handleFileClick, file, removeActiveFile };
};

export default useFileActive;
