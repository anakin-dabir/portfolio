import SyntaxHighlighter from './SyntaxHighlighter';
import { TxtIcon } from '../components/Icons';
import useHeightCalculator from '../hooks/useHeightCalculator';

const CodeBox = ({ file, removeActiveFile }) => {
	const { height } = useHeightCalculator();
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
			<div className='bg-dark flex-1 px-3 xl:px-10 py-5 box-center'>
				<SyntaxHighlighter>
					<Component height={height} />
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default CodeBox;
