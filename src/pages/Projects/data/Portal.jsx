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
        <div className='fixed inset-0 z-0' onClick={handleClose}>
          <div className='fixed inset-0 bg-black opacity-60'></div>
        </div>
      )}
      <div
        ref={ref}
        className={`h-[80vh] overflow-y-auto w-[75vw] top-1/2 z-40 left-1/2 -translate-x-1/2 flex-col flex -translate-y-1/2 fixed ${
          isOpen === index ? 'animator' : 'animator1'
        }  bg-borderColor ${isOpen === index ? 'flex' : ''}`}
      >
        {data.name}
        <button
          className='box-center border border-borderActive w-40 h-10 rounded-lg hover:bg-borderActive transition-colors hover:text-black'
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default Portal;
