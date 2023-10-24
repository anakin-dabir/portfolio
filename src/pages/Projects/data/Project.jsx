import React, {useState} from 'react';
import Portal from './Portal';

const Project = () => {
  return (
    <>
      <div class='grid w-full p-10 md:grid-rows-10 md:grid-cols-2 gap-3'>
        <ProjectItems data={data} />
      </div>
    </>
  );
};
export default Project;

const ProjectItems = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = index => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {data.map((data, i) => {
        return (
          <div key={i} className={`${data.className}bg-dark`}>
            <button onClick={() => handleItemClick(i)} className='group h-full w-full'>
              <div className='h-full w-full relative overflow-hidden'>
                <img
                  src={data.src}
                  className='group-hover:scale-150 h-full w-full object-contain opacity-100  transition-transform'
                />
                <div className='absolute left-0 bg-black inset-0 opacity-0 group-hover:opacity-70 transition-opacity h-full w-full top-0'></div>
                {/* <div className='absolute h-40 bg-black w-full bottom-0 group-hover:flex cursor-pointer'></div> */}
              </div>
            </button>
            <Portal isOpen={activeIndex} setOpen={handleItemClick} index={i} data={data} />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    className: 'w-full bg-black col-span-2',
    src: 'https://themewagon.com/wp-content/uploads/2021/11/purple-react-1.png',
    name: 'SnakeGame',
    stack: 'React, MongoDB, ExpressJS, JWT, Recharts, Tailwindcss',
  },
  {
    className: 'w-full bg-black col-span-2',
    src: 'https://themewagon.com/wp-content/uploads/2021/11/purple-react-1.png',
    name: 'SnakeGame2',
  },
  {
    className: 'w-full bg-black',
    src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D',
    name: 'SnakeGame3',
  },
  {
    className: 'w-full bg-black',
    src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D',
    name: 'SnakeGame4',
  },
];
