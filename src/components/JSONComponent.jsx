const JSONComponent = ({ content }) => {
	return (
		<div className='box-center'>
			<div>
				<p>{'{'}</p>
				{content.map((content, i) => {
					const keys = Object.keys(content);
					return (
						<p key={i}>
							<span className='text-primary'>"{keys}": </span>"<span className='cpy text-secondary'>{content[keys[0]]}</span>"
						</p>
					);
				})}
				<p>{'}'}</p>
			</div>
		</div>
	);
};

export default JSONComponent;
