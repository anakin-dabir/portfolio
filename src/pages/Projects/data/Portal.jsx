import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

const Portal = ({isOpen, setOpen, data, index}) => {
  const ref = useRef(null);
  const handleClose = () => {
    setTimeout(() => {
      ref.current.classList.add('hidden');
    }, 200);
    setOpen(index);
  };

  useEffect(() => {
    if (isOpen !== index) {
      ref.current.classList.add('hidden');
    }
  }, []);
  return createPortal(
    <>
      {isOpen === index && (
        <div className='fixed inset-0 z-50' onClick={handleClose}>
          <div className='fixed inset-0 bg-black opacity-60'></div>
        </div>
      )}
      <div
        ref={ref}
        className={`bg-borderColor  w-[90vw] snap-y  md:h-[80vh] overflow-y-auto md:w-[75vw] top-1/2 z-[60] left-1/2 -translate-x-1/2 -translate-y-1/2 fixed ${
          isOpen === index ? 'animator' : 'animator1'
        }`}
      >
        <div className='flex snap-start items-center flex-col h-full w-full'>
          <img src={data.src} className='h-[80vh] w-full object-contain' />
        </div>
        <div className='flex snap-start h-[80vh] w-full bg-dark box-center flex-col'>
          <span>{`{`}</span>
          <span>{`  name: "Wons Dashboard",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`  stack: "React, MUI, ExpressJS",`}</span>
          <span>{`}`}</span>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default Portal;
