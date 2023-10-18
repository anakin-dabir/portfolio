import useHeightCalculator from '../hooks/useHeightCalculator';

const SyntaxHighlighter = ({ children }) => {
	const { height } = useHeightCalculator();
	return (
		<div className='bg-dark flex-1 px-3 xl:px-10 py-5 box-center'>
			<div
				className='bg-transparent overflow-y-auto overflow-x-auto w-full text-textInactive'
				style={{ height: height }}>
				{children}
			</div>
		</div>
	);
};

export default SyntaxHighlighter;
