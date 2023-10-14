import Highlighter from 'react-syntax-highlighter';

const SyntaxHighlighter = ({ children }) => {
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
				height: '100%',
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
