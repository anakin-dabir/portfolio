const JSONComponent = ({ content }) => {
	return (
		<div className='box-center'>
			<div>
				<p>{'{'}</p>
				{content.map((content, i) => {
					const keys = Object.keys(content);
					return (
						<p key={i} className='ml-4'>
							<span className='text-primary'>"{keys[0]}": </span>"
							{content?.link ? (
								<a href={content?.to ?? '#'} className='text-secondary hover:underline pointer-events-auto' target='_blank' rel='noopener noreferrer'>
									{content[keys[0]]}
								</a>
							) : (
								<span
									className={` text-secondary ${content?.link ? '!cursor-pointer !pointer-events-auto hover:underline' : ''} ${content?.copy ? 'cpy' : ''}`}>
									{content[keys[0]]}
								</span>
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
