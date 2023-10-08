import Highlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SyntaxHighlighter = ({ children }) => {
	return (
		<Highlighter
			language='text'
			wrapLongLines
			wrapLines
			className='font-sans overflow-y-auto [&>*]:font-sans [&>*]:text-textInactive'
			customStyle={{
				backgroundColor: 'transparent',
				overflowX: 'hidden',
				overflowY: 'auto',
				padding: 0,
				width: '100%',
				height: '100%',
				flex: 1,
			}}
			style={atelierSulphurpoolDark}>
			{children}
		</Highlighter>
	);
};

export default SyntaxHighlighter;
