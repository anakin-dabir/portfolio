import SyntaxHighlighter from './SyntaxHighlighter';
import { TxtIcon } from '../components/Icons';

const CodeBox = ({ file, removeActiveFile }) => {
	return (
		<>
			<div className='h-11 flex text-textInactive'>
				<div className='px-4 flex gap-1 items-center bg-dark border-b border-borderColor [&>*]:hover:opacity-100'>
					<TxtIcon />
					<p>{file.fileName}</p>
					<button onClick={removeActiveFile} className='pl-3 pt-3 text-2xl hover:text-textActive md:opacity-0 transition-colors'>
						˟
					</button>
				</div>
			</div>
			<div className='bg-dark flex-1 px-3 py-5'>
				<SyntaxHighlighter>{file.fileContent}</SyntaxHighlighter>
			</div>
		</>
	);
};

export default CodeBox;
