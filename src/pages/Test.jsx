import React, { useState, useRef, useLayoutEffect } from 'react';

const Text = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button className='bg-pink-400 w-40 h-16' onClick={() => setOpen((pre) => !pre)}>
				CLick
			</button>

			<div
				className={`z-[60] bg-pink-400 backdrop-blur-md transition-transform fixed bottom-0 w-full container mx-auto max-w-screen-2xl h-96 overflow-y-auto ${
					open ? '-translate-y-0' : 'translate-y-full'
				}`}></div>
			{open && (
				<div class='fixed inset-0 z-50' onClick={() => setOpen((pre) => !pre)}>
					<div class='fixed inset-0 bg-black opacity-30'></div>
				</div>
			)}
		</>
	);
};

export default Text;
