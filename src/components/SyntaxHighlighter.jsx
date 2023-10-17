import Highlighter from 'react-syntax-highlighter';

const SyntaxHighlighter = ({ children, height }) => {
	return (
		<Highlighter
			language='text'
			wrapLongLines
			wrapLines
			// showLineNumbers
			lineNumberStyle={{ paddingRight: 0 }}
			className='bg-transparent !overflow-x-hidden [&>*]:text-textInactive [&>*]:font-sans [&>code]:break-words [&>code]:hyphens-auto [&>*]:cursor-text [&>*]:pointer-events-auto'
			customStyle={{
				backgroundColor: 'transparent',
				height: height,
				padding: 0,
			}}>
			{children}
		</Highlighter>
	);
};

export default SyntaxHighlighter;
