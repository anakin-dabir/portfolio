export const FileIcon = ({ opened = false }) => {
	return opened ? (
		<svg
			className='fill-primary stroke-primary h-[1.12rem] w-[1.12rem]'
			viewBox='0 0 1920 1920'
			xmlns='http://www.w3.org/2000/svg'>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='m494.165 640.333-278.4 890.774 101.867 31.786L572.459 747h1211.306l-183.36 917.12c-5.013 24.853-26.986 42.88-52.266 42.88H159.979c-29.334 0-53.334-23.893-53.334-53.333v-1440h454.507L732.779 427h760.533v106.667h106.667V320.333H783.872L612.139 107H-.021v1546.667c0 88.213 71.786 160 160 160h1388.16c75.946 0 141.973-54.08 156.906-128.64l208.96-1044.694H494.165Z'
					fillRule='evenodd'></path>{' '}
			</g>
		</svg>
	) : (
		<svg
			className='fill-primary stroke-primary h-[1.12rem] w-[1.12rem]'
			viewBox='0 0 1920 1920'
			xmlns='http://www.w3.org/2000/svg'>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='M1807.059 1637.706c0 31.172-25.412 56.47-56.47 56.47H169.411c-31.06 0-56.47-25.298-56.47-56.47V225.94h590.907L854.4 451.824H225.882v112.94H1807.06v1072.942ZM990.269 451.824 764.385 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V451.824H990.268Z'
					fillRule='evenodd'></path>{' '}
			</g>
		</svg>
	);
};

export const TxtIcon = () => {
	return (
		<svg
			width='24px'
			height='24px'
			viewBox='0 0 512 512'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			fill='#607B96'>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<title>txt-document</title>{' '}
				<g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
					{' '}
					<g id='icon' fill='#607B96' transform='translate(64.000000, 42.666667)'>
						{' '}
						<path
							d='M249.9584,7.10542736e-15 L15.2917333,7.10542736e-15 L15.2917333,234.666667 L57.9584,234.666667 L57.9584,192 L57.9584,169.6 L57.9584,42.6666667 L232.251733,42.6666667 L313.9584,124.373333 L313.9584,169.6 L313.9584,192 L313.9584,234.666667 L356.625067,234.666667 L356.625067,106.666667 L249.9584,7.10542736e-15 L249.9584,7.10542736e-15 Z M-1.42108547e-14,277.5744 L-1.42108547e-14,300.1664 L37.056,300.1664 L37.056,405.7024 L65.92,405.7024 L65.92,300.1664 L103.530667,300.1664 L103.530667,277.5744 L-1.42108547e-14,277.5744 Z M217.1712,277.5744 L186.9632,319.345067 L157.1392,277.5744 L123.581867,277.5744 L168.616533,339.9744 L121.2352,405.7024 L155.304533,405.7024 L185.533867,362.929067 L215.912533,405.7024 L250.7072,405.7024 L203.624533,340.699733 L250.173867,277.5744 L217.1712,277.5744 Z M269.2992,277.5744 L269.2992,300.1664 L306.376533,300.1664 L306.376533,405.7024 L335.240533,405.7024 L335.240533,300.1664 L372.829867,300.1664 L372.829867,277.5744 L269.2992,277.5744 Z'
							id='TXT'>
							{' '}
						</path>{' '}
					</g>{' '}
				</g>{' '}
			</g>
		</svg>
	);
};

export const BgCodeBox = () => {
	return (
		<div className='m-auto'>
			<svg
				viewBox='0 0 1024 1024'
				className='icon w-40 h-40'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'>
				<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
				<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
				<g id='SVGRepo_iconCarrier'>
					<path
						d='M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z'
						className='fill-borderColor'></path>
					<path
						d='M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z'
						className='fill-borderColor'></path>
					<path
						d='M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z'
						className='fill-borderColor'></path>
					<path
						d='M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z'
						className='fill-borderColor'></path>
				</g>
			</svg>
		</div>
	);
};
