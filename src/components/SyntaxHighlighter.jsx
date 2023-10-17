import useHeightCalculator from '../hooks/useHeightCalculator';

const SyntaxHighlighter = ({ children }) => {
	const { height } = useHeightCalculator();
	return (
		<div className='bg-transparent' style={{ height: height }}>
			{children}
		</div>
	);
};

export default SyntaxHighlighter;
