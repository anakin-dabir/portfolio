import React from "react";
import JSONComponent from "../../../components/JSONComponent";
import Loader from "../../../components/Loader";
import Project from "./Project";
const Skills = React.lazy(() => import("./Skills"));
import json from "../../../data/data.json";

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
  return <JSONComponent content={json.projects.certificates.react} />;
};
const FrontEndCertificate = () => {
  return <JSONComponent content={json.projects.certificates.frontend} />;
};
const BackendCertificate = () => {
  return <JSONComponent content={json.projects.certificates.backend} />;
};

// const CyberSecurity = () => {
//   return (
//     <JSONComponent
//       content={[
//         { title: "Cybersecurity" },
//         { by: "Bytewise" },
//         { recieved: "June, 2023" },
//         {
//           id: "Show Credentials",
//           link: true,
//           to: "https://certificate.givemycertificate.com/c/774d233a-63ff-4719-bed1-5a46984aecde",
//         },
//       ]}
//     />
//   );
// };

const FrontEndProjects = () => {
  return <JSONComponent content={json.projects.projects.frontend} />;
};

const Collaboradocs = () => {
  return <JSONComponent content={json.projects.projects.collaboradocs} />;
};

const Evently = () => {
  return <JSONComponent content={json.projects.projects.evently} />;
};

const Vetmeet = () => {
  return <JSONComponent content={json.projects.projects.vetmeet} />;
};
const SmartED = () => {
  return <JSONComponent content={json.projects.projects.smartEd} />;
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
