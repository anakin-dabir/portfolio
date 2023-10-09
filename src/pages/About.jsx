import { useEffect, useRef, useState } from 'react';
import File from '../assets/mac.png';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Test from '../Test';

const About = () => {
	const [isActive, setActive] = useState(true);
	const accordionItems = [
		{ title: 'Item 1', content: 'Content for Item 1' },
		{ title: 'Item 2', content: 'Content for Item 2' },
		{ title: 'Item 3', content: 'Content for Item 3' },
	];

	return (
		<>
			<div className='flex justify-between flex-1 flex-col md:flex-row h-full w-full px-2 py-4'>
				<div className='w-full border border-borderColor border-collapse md:w-1/4 gap-1 md:gap-[3px] flex flex-col  md:px-0 sticky'>
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

[Contact Me](#) | [GitHub](https://github.com/yourusername) | [LinkedIn](https://www.linkedin.com/in/yourname)



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

const SideBarContent = ({ title, content, onClick, isActive }) => {
	// const [active, setActive] = useState(false);
	const contentRef = useRef(null);
	// const toggleAccordion = () => {
	// 	setActive(!active);
	// 	if (contentRef.current) {
	// 		contentRef.current.style.maxHeight = active ? '0px' : `${contentRef.current.scrollHeight}px`;
	// 	}
	// };

	return (
		<div className='w-full flex flex-col'>
			<button onClick={onClick} className={`items-center  bg-borderColor/80 px-5  h-9 md:h-11 w-full  flex`}>
				<div className={`${isActive ? 'text-textActive' : 'hover:text-textActive'} transition-colors box-center`}>
					<p className={`transition-transform ${isActive ? 'rotate-90' : 'rotate-0'}`}>▶</p>
					<p className='pl-3'>{title}</p>
				</div>
			</button>
			<div
				ref={contentRef}
				className={`overflow-hidden mb-[3px] bg-dark transition-all  ${isActive ? 'max-h-40' : 'max-h-0'}`}>
				<div className='flex flex-col py-3 pl-5'>
					<div className='flex gap-2 items-center'>
						{/* <img src={File} alt='' /> */}
						<img
							alt='svgImg'
							src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiM0M2Q5YWQiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNCw0KSI+PHBhdGggZD0iTTEwLDI3aDQ0djE4YzAsMy4zMDkgLTIuNjkxLDYgLTYsNmgtMzJjLTMuMzA5LDAgLTYsLTIuNjkxIC02LC02ek01NCwyNGgtNDR2LTVjMCwtMy4zMDkgMi42OTEsLTYgNiwtNmgzLjg5NmMxLjgxLDAgMy41ODUsMC42MjMgNC45OTgsMS43NTNsMS43MTMsMS4zN2MwLjcwNSwwLjU2NiAxLjU5MiwwLjg3NyAyLjQ5NywwLjg3N2gxOC44OTZjMy4zMDksMCA2LDIuNjkxIDYsNnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4='
						/>
						<p className='italic'>high-school</p>
					</div>
					<div className='flex gap-2 items-center'>
						<svg xmlns='http://www.w3.org/2000/svg' width='18' height='16' viewBox='0 0 16 14' fill='none'>
							<path
								d='M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z'
								fill='#E99287'
							/>
						</svg>
						<p>university</p>
					</div>

					<p>interests</p>
				</div>
			</div>
		</div>
	);
};
const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index) => {
		if (index === activeIndex) {
			// Clicking the same item again should close it.
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
