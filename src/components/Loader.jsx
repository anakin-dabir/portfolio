const Loader = ({ absolute = false }) => {
  return (
    <div
      className={`${
        absolute ? "absolute" : "fixed"
      } opacity-70 pt-14 md:pt-0 top-1/2 left-1/2 box-center flex-col -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="running md:scale-[2] scale-150">
        <div className="outer">
          <div className="body">
            <div className="arm front"></div>
            <div className="arm behind"></div>
            <div className="leg front"></div>
            <div className="leg behind"></div>
          </div>
        </div>
      </div>
      <p className="pt-10 text-textInactive text-lg md:text-xl font-medium">
        Loading
        <span className="animate-ping">.</span>
        <span className="animate-pulse">.</span>
        <span className="animate-pulse">.</span>
      </p>
    </div>
  );
};

export default Loader;
