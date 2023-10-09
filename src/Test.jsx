import React from 'react';
import ReactHighlightSyntax from 'react-highlight-syntax';

const code = `THis is me under the water please fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off
THis is the game of commandoes so fuck off

`;

const Test = () => {
	return (
		<ReactHighlightSyntax
			language={'TypeScript'}
			// copy={true}
			// copyBtnTheme={'Dark'}
			className='bg-transparent text-textInactive overflow-auto h-[67vh]  [&>button]:right-20 [&>*]:whitespace-pre-wrap'>
			{code}
		</ReactHighlightSyntax>
	);
};
export default Test;
