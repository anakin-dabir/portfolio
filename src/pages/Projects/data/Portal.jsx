import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import Chess1 from '../../../assets/chess1.png';

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
        className={`bg-borderColor  w-[100vw] h-[80vh]  md:h-[80vh] bottom-0 overflow-y-auto md:w-[75vw] md:top-1/2 z-[60] left-1/2 -translate-x-1/2 md:-translate-y-1/2 fixed ${
          isOpen === index ? 'animator' : 'animator1'
        }`}
      >
        {/* <section class='text-gray-400 bg-gray-900 body-font'>
          <div class='px-5 py-3 mx-auto flex flex-col'>
            <div class='rounded-lg overflow-hidden'>
              <img alt='content' class='object-cover object-center h-full w-full' src={data.src} />
            </div>
            <div class='lg:w-4/6 mx-auto'>
              <div class='flex flex-col sm:flex-row mt-10'>
                <div class='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                  <div class='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-10 h-10'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <div class='flex flex-col items-center text-center justify-center'>
                    <h2 class='font-medium title-font mt-4 text-white text-lg'>Phoebe Caulfield</h2>
                    <div class='w-12 h-1 bg-green-500 rounded mt-2 mb-4'></div>
                    <p class='text-base text-gray-400'>
                      Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial
                      venmo tbh hot chicken gentrify portland.
                    </p>
                  </div>
                </div>
                <div class='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                  <p class='leading-relaxed text-lg mb-4'>
                    Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami
                    everyday carry hexagon locavore direct trade art party. Locavore small batch
                    listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring
                    book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe
                    normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic
                    asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they
                    sold out four loko. 3 wolf moon brooklyn.
                  </p>
                  <a class='text-green-400 inline-flex items-center'>
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className='flex h-full w-full flex-col p-4'>
          <div className='grid w-full md:grid-cols-3 gap-2 md:grid-rows-2'>
            <div className='md:row-span-2 md:col-span-2'>
              <img src={data.src} alt='' className='object-cover' />
            </div>
            <div className=''>
              <img src={Chess1} alt='' className='object-cover' />
            </div>
            <div>
              <img src={data.src} alt='' className='object-cover' />
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default Portal;
