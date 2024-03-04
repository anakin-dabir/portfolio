import React from "react";
import JSONComponent from "../../../components/JSONComponent";
import Loader from "../../../components/Loader";
import Project from "./Project";
const Skills = React.lazy(() => import("./Skills"));

const SkillsData = ({ height }) => {
  return (
    <>
      <div style={{ height: height }} className="overflow-y-auto relative">
        <React.Suspense fallback={<Loader absolute />}>
          <Skills />
        </React.Suspense>
      </div>
    </>
  );
};

const ReactCertificate = () => {
  return (
    <>
      <JSONComponent
        content={[
          { title: "Advanced React" },
          { by: "Meta" },
          { recieved: "April 08, 2023" },
          {
            id: "Show Credentials",
            link: true,
            to: "https://coursera.org/verify/HC3MN6MF9UXN",
          },
        ]}
      />
    </>
  );
};
const FrontEndCertificate = () => {
  return (
    <>
      <JSONComponent
        content={[
          { title: "FrontEnd with React" },
          { by: "IBM - Coursera" },
          { recieved: "April 07, 2023" },
          {
            id: "Show Credentials",
            link: true,
            to: "https://coursera.org/verify/RDCGFDH8FHHP",
          },
        ]}
      />
    </>
  );
};
const BackendCertificate = () => {
  return (
    <>
      <JSONComponent
        content={[
          { title: "BackEnd with Node.js & Express" },
          { by: "IBM - Coursera" },
          { recieved: "April 09, 2023" },
          {
            id: "Show Credentials",
            link: true,
            to: "https://coursera.org/verify/VE3F9C2JDQDY",
          },
        ]}
      />
    </>
  );
};
const CyberSecurity = () => {
  return (
    <>
      <JSONComponent
        content={[
          { title: "Cybersecurity" },
          { by: "Bytewise" },
          { recieved: "June, 2023" },
          {
            id: "Show Credentials",
            link: true,
            to: "https://certificate.givemycertificate.com/c/774d233a-63ff-4719-bed1-5a46984aecde",
          },
        ]}
      />
    </>
  );
};

const FrontEndProjects = () => {
  return (
    <JSONComponent
      content={[
        { title: "v1 Portfolio" },
        { desc: "All front-end projects are on this website" },
        { tech: "NextJS, TypeScript, Material-UI" },
        {
          website: "https://v1.anakin-dabir.vercel.app",
          link: true,
          to: "https://v1.anakin-dabir.vercel.app",
        },
        {
          github: "anakin-dabir/portfolioV1",
          link: true,
          to: "https://github.com/anakin-dabir/portfolioV1",
        },
      ]}
    />
  );
};

const Collaboradocs = () => {
  return (
    <JSONComponent
      content={[
        { title: "Collaboradocs" },
        {
          tagLine: "Real-time collaboration, anywhere, anytime",
        },
        {
          desc: "Comprehensive platform for storing, tracking, sharing and managing project documentation seamlessly",
        },
        {
          tech: "React, Javascript, Redux-toolkit, Material-UI, tailwindcss, express, mongoose, socket.io, tiptap-editor",
        },
        {
          github: "anakin-dabir/collaboradocs",
          link: true,
          to: "https://github.com/anakin-dabir/collaboradocs",
        },
      ]}
    />
  );
};

const Evently = () => {
  return (
    <JSONComponent
      content={[
        { title: "Collaboradocs" },
        {
          desc: "a convenient platform for creating, managing, and scheduling events dynamically",
        },
        {
          tech: "React, Javascript, Zustand, express, tailwindcss, Material-UI, mongoose, socket.io, pm2",
        },
        {
          github: "anakin-dabir/evently-23",
          link: true,
          to: "https://github.com/anakin-dabir/evently-23",
        },
      ]}
    />
  );
};

const Vetmeet = () => {
  return (
    <JSONComponent
      content={[
        { title: "VetMeet" },
        {
          desc: "Web based solution to connect with veterans and engage them into community services based on their interests",
        },
        {
          tech: "React, Javascript, Redux, express, Material-UI, mongoose, twilio",
        },
        {
          github: "anakin-dabir/vetmeet",
          link: true,
          to: "https://github.com/anakin-dabir/vetmeet",
        },
      ]}
    />
  );
};
const SmartED = () => {
  return (
    <JSONComponent
      content={[
        { title: "SmartEd" },
        {
          desc: "Web application provides a comprehensive platform for instructors and students to interact and facilitate learning",
        },
        {
          tech: "React, Javascript, axios, express, tailwindcss, mongoose, daisyui",
        },
        {
          github: "anakin-dabir/smartEd",
          link: true,
          to: "https://github.com/anakin-dabir/smartEd",
        },
      ]}
    />
  );
};

const data = [
  {
    title: "Skills",
    content: [
      {
        fileName: "skills",
        fileContent: SkillsData,
      },
    ],
  },
  {
    title: "Projects",
    content: [
      {
        fileName: "FrontEnd",
        fileContent: FrontEndProjects,
      },
      {
        fileName: "Collaboradocs",
        fileContent: Collaboradocs,
      },
      {
        fileName: "Evently",
        fileContent: Evently,
      },
      {
        fileName: "SmartEd",
        fileContent: SmartED,
      },
      {
        fileName: "Vetmeet",
        fileContent: Vetmeet,
      },
      {
        fileName: "React",
        fileContent: Project,
      },
    ],
  },
  {
    title: "Certifications",
    content: [
      {
        fileName: "React",
        fileContent: ReactCertificate,
      },
      {
        fileName: "FrontEnd",
        fileContent: FrontEndCertificate,
      },
      {
        fileName: "Backend",
        fileContent: BackendCertificate,
      },
    ],
  },
];

export default data;
