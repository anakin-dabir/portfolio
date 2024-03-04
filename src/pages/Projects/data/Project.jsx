import React, { useState } from "react";
import Portal from "./Portal";
import Chess from "../../../assets/chess.png";
import Chess1 from "../../../assets/chess1.png";
import Messenger from "../../../assets/messenger.png";
import Messenger1 from "../../../assets/messenger1.png";

const Project = () => {
  return (
    <>
      <div class="grid w-full md:p-10 md:grid-rows-2 md:grid-cols-2 gap-3">
        <ProjectItems data={data} />
      </div>
    </>
  );
};
export default Project;

const ProjectItems = ({ data }) => {
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
            <button onClick={() => handleItemClick(i)} className="group h-full w-full">
              <div className="h-full w-full relative overflow-hidden">
                <img
                  src={data.src}
                  className="group-hover:scale-110 h-full w-full object-fill opacity-100  transition-transform"
                />
                <div className="absolute left-0 bg-black  opacity-70 md:opacity-0 pl-2 sm:p-5 flex flex-col items-start justify-center sm:items-center group-hover:opacity-70 transition-opacity h-full w-full top-0">
                  <div className="text-primary font-bold uppercase md:text-2xl">{data.name}</div>
                  <div className="text-secondary">{data.stack}</div>
                </div>
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
    className: "w-full bg-black",
    src: Chess,
    src1: Chess1,
    name: "Snake Game",
    stack: "React, MongoDB, ExpressJS, JWT, Recharts, Tailwindcss",
  },
  {
    className: "w-full bg-black row-span-2 col-span-2",
    src: Messenger,
    src1: Messenger1,
    name: "Chat App",
  },
  {
    className: "w-full bg-black",
    src: Chess,
    src1: Chess1,
    name: "Snake Game",
    stack: "React, MongoDB, ExpressJS, JWT, Recharts, Tailwindcss",
  },
];
