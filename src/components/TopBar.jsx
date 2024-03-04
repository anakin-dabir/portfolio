import { NavLink, useLocation } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import data from "../data/data.json";

const TopBar = () => {
  const [opened, setOpened] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleResize = () => {
      if (opened && window.innerWidth >= 824) setOpened(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [opened]);
  useEffect(() => {
    opened && setOpened(false);
  }, [pathname]);
  return (
    <>
      <header>
        <SideBar opened={opened} />
        <div className="h-14 w-full flex border-b z-50 px-5">
          <div className="flex items-center pr-6">
            <p className="text-textInactive">{data.personal.username}</p>
          </div>
          <div className="hidden md:flex">
            <Link to="/" name="home" />
            <Link to="/about" name="  about-me" />
            <Link to="/projects" name="  projects" />
          </div>
          <div className="flex-1"></div>
          <Link to="/contact" className="hidden md:flex" name="contact-me" />
          <HamburgerButton toggle={() => setOpened(prev => !prev)} opened={opened} />
        </div>
      </header>
    </>
  );
};

export default TopBar;

const HamburgerButton = ({ toggle, opened }) => {
  return (
    <div
      className="flex md:hidden z-50 cursor-pointer items-center justify-center"
      onClick={toggle}
    >
      <div className="space-y-2">
        <span
          className={`block h-1 w-7 origin-center rounded-full bg-textInactive transition-transform  ease-in-out 
					${opened && "translate-y-1.5 rotate-45"}`}
        ></span>
        <span
          className={`block h-1 w-4 origin-center rounded-full bg-primary transition-transform ease-in-out ${
            opened && "w-7 -translate-y-1.5 -rotate-45"
          }`}
        ></span>
      </div>
    </div>
  );
};

export const Link = ({ to = "/", name, className }) => {
  // const customTo = useMemo(({ isActive }) => (isActive ? '#' : to), [isActive]);
  return (
    <>
      <NavLink
        to={to}
        className={
          ({ isActive }) =>
            `${className} relative flex py-4 items-center border-x-0 z-50 px-4 hover:text-textActive transition-colors focus:outline-none focus:text-textActive 
			${
        isActive
          ? "text-textActive pointer-events-none bg-gradient-to-r md:bg-gradient-to-b from-transparent via-transparent md:border-b-2 border-b-borderActive  to-borderActive/20 [&>span]:text-secondary"
          : "text-textInactive"
      }
	  `
          //  border-b-2 border-b-borderActive
        }
      >
        <span className="text-primary pr-1">@</span>
        <p className="text-left">{name}</p>
      </NavLink>
    </>
  );
};

const SideBar = ({ opened }) => {
  return (
    <>
      <div
        className={`h-screen w-screen fixed top-0 right-0  bg-borderColor/80 backdrop-blur-md  items-center transition-transform z-10 duration-300 ease-in-out flex flex-col ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-14"></div>
        <div className="flex flex-col text-2xl justify-center items-end flex-1 transition-opacity gap-1">
          <div className="h-14  box-center">
            <Link to="/" name="home" />
          </div>
          <div className="h-14  box-center">
            <Link to="/about" name="about-me" />
          </div>
          <div className="h-14  box-center">
            <Link to="/projects" name="projects" />
          </div>
          <div className="h-14  box-center">
            <Link to="/contact" name="contact-me" />
          </div>
          <div className="h-14  box-center">
            <Link to="/error" name="error" />
          </div>
        </div>
        <div className="flex items-center justify-center h-14 gap-6">
          <a href={data.personal.linkedin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-textInactive"
              height="32"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
          <a href={data.personal.github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-textInactive"
              height="32"
              viewBox="0 0 64 64"
            >
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
