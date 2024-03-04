import React, { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Contact = React.lazy(() => import("./pages/Contact"));
import Error from "./pages/Error";
import { HashRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Loader from "./components/Loader";
const App = () => {
  return (
    <>
      <HashRouter>
        <Wrapper>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </Suspense>
        </Wrapper>
      </HashRouter>
    </>
  );
};
export default App;
