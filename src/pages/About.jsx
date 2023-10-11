import { useEffect, useRef, useState } from 'react';
import File from '../assets/mac.png';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Test from '../Test';

const About = () => {
	const [isActive, setActive] = useState(true);
	const accordionItems = [
		{ title: 'Personal Info', content: 'Content for Item 1' },
		{ title: 'Contacts', content: 'Content for Item 2' },
	];

	return (
		<>
			<div className='flex justify-between flex-1 flex-col md:flex-row h-full w-full px-2 py-4'>
				<div className='w-full border border-borderColor border-collapse md:w-1/3 lg:w-[25%] 2xl:w-[18%]  gap-1 md:gap-[3px] flex flex-col  md:px-0 sticky'>
					<Accordion items={accordionItems} />
				</div>
				<div
					className={`overflow-hidden border border-borderColor border-collapse flex flex-1 flex-col pt-4 md:pt-0  transition-opacity ${
						isActive ? 'opacity-1' : 'opacity-0'
					}`}>
					<div className='h-11 flex text-textInactive'>
						<div className='px-10  flex items-center bg-dark border-b border-borderColor '>profile-info</div>
					</div>
					<div className='bg-dark flex-1  px-5 py-6'>
						<SyntaxHighlighter>
							{`--> About Me
Hello, I'm [Your Name], a passionate Frontend React Developer and Software Engineer with a keen eye for creating elegant and responsive user interfaces. I have a strong foundation in modern web technologies and a deep love for crafting exceptional digital experiences.

--> What I Do
I specialize in crafting delightful user interfaces using React.js, JavaScript, and related technologies. My goal is to transform complex ideas into clean, user-friendly interfaces that not only look great but also perform seamlessly across various devices and browsers.

My expertise includes:
- **React Development:** I have a solid understanding of React's core concepts, and I'm experienced in building reusable components, state management, and routing to create dynamic web applications.
- **Responsive Design:** I'm skilled in creating responsive layouts that adapt gracefully to different screen sizes, ensuring a consistent user experience on desktops, tablets, and mobile devices.
- **Cross-Browser Compatibility:** I'm committed to writing clean, cross-browser-compatible code to ensure that websites and web apps function flawlessly for all users.
- **Optimized Performance:** I focus on optimizing website performance, ensuring fast load times and smooth interactions to enhance the user experience.
- **Collaboration:** I enjoy working collaboratively with cross-functional teams, including designers, backend developers, and project managers, to bring ideas to life.

--> My Passion
My passion for coding goes beyond my work hours. I'm constantly learning and exploring new technologies, frameworks, and design trends to stay at the forefront of the ever-evolving web development landscape. Whether it's experimenting with the latest React libraries or diving into the intricacies of web animations, I thrive on pushing the boundaries of what's possible in web development.

--> Let's Connect
I'm always open to new opportunities, exciting projects, and collaborations. If you're interested in working together or have any questions, feel free to reach out to me. Let's create something amazing together!

[Contact Me](#) | [GitHub](https://github.com/yourusername) | [LinkedIn](https://www.linkedin.com/in/yourname/mariko)



`}
						</SyntaxHighlighter>
						{/* <Test /> */}
					</div>
				</div>
			</div>
			{/* <button onClick={() => setActive((prev) => !prev)}>Btun</button> */}
		</>
	);
};

export default About;

const SideBarContent = ({ title, content, onClick, isActive, active }) => {
	// const [active, setActive] = useState(false);
	const contentRef = useRef(null);
	// const toggleAccordion = () => {
	// 	setActive(!active);
	// 	if (contentRef.current) {
	// 		contentRef.current.style.maxHeight = active ? '0px' : `${contentRef.current.scrollHeight}px`;
	// 	}
	// };
	console.log(active);

	return (
		<div className='w-full flex flex-col'>
			<button onClick={onClick} className={`items-center  bg-borderColor/80 px-5  h-10  w-full  flex`}>
				<div className={`${isActive ? 'text-textActive' : 'hover:text-textActive'}  transition-colors box-center`}>
					{isActive ? <FileIcon opened /> : <FileIcon />}
					<p className='pl-3'>{title}</p>
				</div>
			</button>
			<div
				ref={contentRef}
				className={`overflow-hidden mb-[3px] bg-dark transition-all  ${isActive ? 'max-h-40' : 'max-h-0'}`}>
				<div className='flex flex-col py-3 pl-5'>
					<div className='flex gap-2 items-center'>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleItemClick = (index) => {
		if (index === activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<div className='accordion'>
			{items.map((item, index) => (
				<SideBarContent
					key={index}
					title={item.title}
					content={item.content}
					isActive={index === activeIndex}
					onClick={() => handleItemClick(index)}
				/>
			))}
		</div>
	);
};

const FileIcon = ({ opened = false }) => {
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
