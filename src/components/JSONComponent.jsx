// /src/components/JSONComponent.jsx
// Tuesday, October 17th 2023, 9:02 pm

const JSONComponent = ({content}) => {
  return (
    <div className='box-center !text-textInactive text-sm md:text-base'>
      <div>
        <p className='text-white'>{'{'}</p>
        {content.map((content, i, arr) => {
          const keys = Object.keys(content);
          return (
            <p key={i} className='md:ml-4'>
              <span className='text-primary'>"{keys[0]}"</span>
              <span className='text-white'>: </span>"
              {content?.link ? (
                <a
                  href={content?.to ?? '#'}
                  className={`text-secondary  ${
                    content?.copy ? 'cpy' : ''
                  } border-b border-b-secondary pointer-events-auto`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {content[keys[0]]}
                </a>
              ) : (
                <span className={` text-secondary ${content?.copy ? 'cpy' : ''}`}>
                  {content[keys[0]]}
                </span>
              )}
              "{i !== arr.length - 1 && <span className='text-white'>,</span>}
            </p>
          );
        })}
        <p className='text-white'>{'}'}</p>
      </div>
    </div>
  );
};

export default JSONComponent;
