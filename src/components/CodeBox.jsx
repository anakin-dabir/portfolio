import SyntaxHighlighter from './SyntaxHighlighter';
import { TxtIcon } from '../components/Icons';
import { BgCodeBox } from '../components/Icons';
import useHeightCalculator from '../hooks/useHeightCalculator';

const CodeBox = ({ file, removeActiveFile }) => {
	const height = useHeightCalculator();
	const { fileContent: Component, fileType, fileName } = file;
	return (
		<div className={`transition-opacity ${file.activeIndex != null ? 'opacity-1' : 'opacity-0'}`}>
			<div className='h-11 flex text-textInactive'>
				<div className='px-4 flex gap-1 items-center bg-dark border-b border-borderColor [&>*]:hover:opacity-100'>
					<TxtIcon />
					<p>{fileName}</p>
					<button onClick={removeActiveFile} className='pl-3 pt-3 text-2xl hover:text-textActive md:opacity-0 transition-colors'>
						˟
					</button>
				</div>
			</div>
			<div className='bg-dark flex-1 px-3 py-5' style={{ height: height }}>
				{fileType === 'Component' ? <Component /> : <SyntaxHighlighter>{Component}</SyntaxHighlighter>}
			</div>
		</div>
	);
};

export default CodeBox;
