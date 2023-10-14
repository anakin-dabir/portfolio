import CodeBox from '../components/CodeBox';
import useFileActive from '../hooks/useFileActive';
import Accordion from '../components/Accordion';
import { BgCodeBox } from '../components/Icons';

const Contact = () => {
	const { handleFileClick, file, removeActiveFile } = useFileActive();
	const accordionItems = [
		{
			title: 'Personal Info',
			content: [{ fileName: 'Message->', fileContent: Form, fileType: 'Component' }],
		},
	];

	return (
		<>
			<div className='flex justify-between flex-1 flex-col md:flex-row h-full w-full px-2 pt-1 pb-4 md:px-0 md:pb-1'>
				<div className='w-full border border-borderColor border-collapse md:w-1/3 lg:w-[25%] 2xl:w-[18%]  gap-1 md:gap-[3px] flex flex-col  md:px-0 sticky'>
					<Accordion items={accordionItems} handleFileClick={handleFileClick} file={file} />
				</div>
				<div className='border border-borderColor border-collapse flex flex-1 flex-col mt-2 md:mt-0 relative'>
					{file.activeIndex == null ? (
						<BgCodeBox variant='Contact' />
					) : (
						<CodeBox file={file} removeActiveFile={removeActiveFile} />
					)}
				</div>
			</div>
		</>
	);
};

export default Contact;

const Form = () => {
	return (
		<>
			<div className={`h-full bg-pink-400`}></div>
		</>
	);
};
