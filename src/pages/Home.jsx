import { Typewriter } from "react-simple-typewriter";
import Game from "../components/game/Game";
import BackGroundGlow from "../components/BackGroundGlow";

const Home = () => {
  return (
    <>
      <div className="h-full w-full flex-1 flex overflow-hidden items-center justify-center 2xl:gap-32 gap-10 px-5 py-5 relative">
        <BackGroundGlow />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p>Presenting you the Freak!!</p>
            <p className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Talha Arshad
            </p>
            <p className="text-primary text-xl md:text-3xl">
              <span className="">{"->"}</span>
              <Typewriter
                cursorStyle={"_"}
                typeSpeed={100}
                cursorColor="#43D9AD"
                loop
                cursor
                words={[" Full Stack Developer", " React Developer"]}
              />
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-textInactive">// find my profile on Github:</p>
            <p>
              <span className="text-tertiary">const </span>
              <span className="text-primary">github</span>
              <span> = </span>
              <span className="text-secondary !pointer-events-auto !select-text !cursor-text">
                "https://github.com/anakin-dabir"
              </span>
            </p>
          </div>
        </div>
        <Game />
      </div>
    </>
  );
};

export default Home;
