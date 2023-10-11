import { useEffect, useState } from 'react';
import Highlighter from 'react-syntax-highlighter';

const SyntaxHighlighter = ({ children }) => {
	const [height, setHeight] = useState(
		window.innerWidth >= 824 ? window.innerHeight - 260 : window.innerHeight * 0.67
	);
	useEffect(() => {
		const updateHeight = () => {
			if (window.innerWidth >= 824) {
				const newHeight = window.innerHeight - 260;
				setHeight(newHeight);
			}
		};
		window.addEventListener('resize', updateHeight);
		return () => {
			window.removeEventListener('resize', updateHeight);
		};
	}, []);
	return (
		<Highlighter
			language='text'
			wrapLongLines
			wrapLines
			// showLineNumbers
			lineNumberStyle={{ paddingRight: 0 }}
			className='bg-transparent !overflow-x-hidden [&>*]:text-textInactive [&>*]:font-sans [&>code]:break-words [&>code]:hyphens-auto'
			customStyle={{
				backgroundColor: 'transparent',
				height: height,
				padding: 0,
				// overflowX: 'hidden',
				// overflowY: 'auto',
				// width: '100%',
				// height: '100%',
				// flex: 1,
			}}
			// style={atelierSulphurpoolDark}
		>
			{children}
		</Highlighter>
	);
};

export default SyntaxHighlighter;
