import SyntaxHighlighter from './SyntaxHighlighter';
import { TxtIcon } from '../components/Icons';

const CodeBox = ({ file, removeActiveFile }) => {
	const { fileContent: Component, fileName, icon: Icon } = file;
	return (
		<div className={`transition-opacity ${file.activeIndex != null ? 'opacity-1' : 'opacity-0'}`}>
			<div className='h-11 flex text-textInactive'>
				<div className='px-5 flex gap-2 items-center bg-dark border-b border-borderColor [&>*]:hover:opacity-100'>
					{!Icon ? <TxtIcon /> : Icon}
					<p>{fileName}</p>
					<button onClick={removeActiveFile} className='pl-3 pt-3 text-2xl hover:text-textActive md:opacity-0 transition-colors'>
						˟
					</button>
				</div>
			</div>
			<SyntaxHighlighter>
				<Component />
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeBox;
