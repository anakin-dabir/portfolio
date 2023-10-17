import { CssIcon, FigmaIcon, HtmlIcon, ReactIcon } from './icons/IconPack1';
import { ExpressIcon, JsIcon, MongoIcon, TsIcon } from './icons/IconPack2';
import {
	MuiIcon,
	NextIcon,
	ReduxIcon,
	SocketIcon,
	TailwindIcon,
} from './icons/IconPack3';
import { FireBaseIcon, WebRTCIcon } from './icons/IconPack4';
import { CIcon, RechartIcon } from './icons/IconPack5';

const Skills = () => {
	return (
		<div className='box-center flex-wrap p-4 h-full gap-5'>
			<SvgLink to='https://react.dev/' name='React'>
				<ReactIcon />
			</SvgLink>
			<SvgLink to='https://nextjs.org/' name='Next'>
				<NextIcon />
			</SvgLink>
			<SvgLink to='https://en.wikipedia.org/wiki/JavaScript' name='JavaScript'>
				<JsIcon />
			</SvgLink>
			<SvgLink to='https://www.typescriptlang.org/' name='TypeScript'>
				<TsIcon />
			</SvgLink>
			<SvgLink to='https://expressjs.com/' name='ExpressJs'>
				<ExpressIcon />
			</SvgLink>
			<SvgLink to='https://www.mongodb.com/docs/' name='MongoDB'>
				<MongoIcon />
			</SvgLink>
			<SvgLink to='https://tailwindcss.com/' name='TailwindCSS'>
				<TailwindIcon />
			</SvgLink>
			<SvgLink to='https://mui.com/' name='MaterialUI'>
				<MuiIcon />
			</SvgLink>
			<SvgLink to='https://en.wikipedia.org/wiki/HTML' name='HTML'>
				<HtmlIcon />
			</SvgLink>
			<SvgLink to='https://en.wikipedia.org/wiki/CSS' name='CSS'>
				<CssIcon />
			</SvgLink>
			<SvgLink to='https://redux.js.org/' name='Redux'>
				<ReduxIcon />
			</SvgLink>
			<SvgLink to='https://webrtc.org/' name='WebRTC'>
				<WebRTCIcon />
			</SvgLink>
			<SvgLink to='https://firebase.google.com/' name='FireBase'>
				<FireBaseIcon />
			</SvgLink>
			<SvgLink to='https://socket.io/' name='Socket.io'>
				<SocketIcon />
			</SvgLink>
			<SvgLink to='https://recharts.org/' name='<Recharts/>'>
				<RechartIcon />
			</SvgLink>
			<SvgLink to='https://www.figma.com/' name='Figma'>
				<FigmaIcon />
			</SvgLink>
			<SvgLink to='https://en.wikipedia.org/wiki/C%2B%2B' name='C++'>
				<CIcon />
			</SvgLink>
		</div>
	);
};

export default Skills;

const SvgLink = ({ to, name, children }) => {
	return (
		<>
			<a href={to} className='box-center group relative' target='_blank' rel='noopener noreferrer'>
				<div className='bg-black border border-borderColor h-5 opacity-0 box-center transition-opacity text-textActive absolute top-0 right-0 group-hover:opacity-100'>
					{name}
				</div>
				{children}
			</a>
		</>
	);
};
