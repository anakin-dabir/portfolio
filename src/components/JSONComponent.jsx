// /src/components/JSONComponent.jsx
// Tuesday, October 17th 2023, 9:02 pm

const JSONComponent = ({ content }) => {
  let count = 1;
  return (
    <div className=" !text-textInactive text-sm md:text-base">
      <div>
        <p className="text-white">
          <span className="text-white/50 text-sm pr-10 hidden sm:inline-block">{count}</span>
          {"{"}
        </p>
        {content.map((content, i, arr) => {
          const keys = Object.keys(content);
          return (
            <>
              <div className="flex gap-0 sm:gap-10 items-center">
                <span className="text-white/50 text-sm hidden sm:inline-block">{++count}</span>
                <p key={i} className="md:ml-4">
                  <span className="text-primary">"{keys[0]}"</span>
                  <span className="text-white">: </span>"
                  {content?.link ? (
                    <a
                      href={content?.to ?? "#"}
                      className={`text-secondary  ${
                        content?.copy ? "cpy" : ""
                      } border-b border-b-secondary pointer-events-auto`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content[keys[0]]}
                    </a>
                  ) : (
                    <span className={` text-secondary ${content?.copy ? "cpy" : ""}`}>
                      {content[keys[0]]}
                    </span>
                  )}
                  "{i !== arr.length - 1 && <span className="text-white">,</span>}
                </p>
              </div>
            </>
          );
        })}
        <p className="text-white">
          <span className="text-white/50 text-sm pr-10 hidden sm:inline-block">{++count}</span>
          {"}"}
        </p>
      </div>
    </div>
  );
};

export default JSONComponent;
