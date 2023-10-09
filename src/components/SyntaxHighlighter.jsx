import Highlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SyntaxHighlighter = ({ children }) => {
	return (
		<Highlighter
			language='text'
			wrapLongLines
			wrapLines
			// showLineNumbers
			lineNumberStyle={{ paddingRight: 0 }}
			className='bg-transparent text-textInactive !overflow-x-hidden h-[67vh] [&>*]:text-textInactive [&>*]:font-sans'
			customStyle={{
				backgroundColor: 'transparent',
				// overflowX: 'hidden',
				// overflowY: 'auto',
				padding: 0,
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
