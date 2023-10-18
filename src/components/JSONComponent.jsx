const JSONComponent = ({ content }) => {
	return (
		<div className='box-center text-sm md:text-base'>
			<div>
				<p>{'{'}</p>
				{content.map((content, i) => {
					const keys = Object.keys(content);
					return (
						<p key={i} className='md:ml-4'>
							<span className='text-primary'>"{keys[0]}": </span>"
							{content?.link ? (
								<a
									href={content?.to ?? '#'}
									className={`text-secondary  ${content?.copy ? 'cpy' : ''} underline pointer-events-auto`}
									target='_blank'
									rel='noopener noreferrer'>
									{content[keys[0]]}
								</a>
							) : (
								<span className={` text-secondary ${content?.copy ? 'cpy' : ''}`}>{content[keys[0]]}</span>
							)}
							"
						</p>
					);
				})}
				<p>{'}'}</p>
			</div>
		</div>
	);
};

export default JSONComponent;
