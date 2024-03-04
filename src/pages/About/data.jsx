import JSONComponent from "../../components/JSONComponent";

const PersonalInfo = () => {
  return (
    <div className="max-w-screen-md md:mt-5 md:ml-5 text-white">
      I am a passionate and results-oriented React and Full Stack Developer with a strong
      understanding of front-end and back-end development principles. I am skilled in building
      interactive and user-friendly web applications using React and other relevant technologies. I
      am also proficient in various back-end technologies, allowing me to work on projects from
      conception to deployment. I am a team player with excellent communication and problem-solving
      skills, always eager to learn and grow my skillset
    </div>
  );
};

const University = () => {
  return (
    <JSONComponent
      content={[
        { university: "University of the Punjab" },
        { degree: "BS Computer Science" },
        { duration: "(2021-2025)" },
      ]}
    />
  );
};

const EbryxInternship = () => {
  return (
    <JSONComponent
      content={[
        { title: "Full-stack Developer" },
        { company: "Ebryx (Pvt.) Ltd." },
        { duration: "June 2023 - Aug 2023 (3 mos)" },
      ]}
    />
  );
};

const DevfumInternship = () => {
  return (
    <JSONComponent
      content={[
        { title: "Software Engineering Internship" },
        { company: "Devfum (Pvt.) Ltd." },
        { duration: "Sept 2023 - Dec 2023 (4 mos)" },
      ]}
    />
  );
};

const DevfumJob = () => {
  return (
    <JSONComponent
      content={[
        { title: "Full-stack Developer" },
        { company: "Devfum (Pvt.) Ltd." },
        { duration: "Jan 2024 - present" },
      ]}
    />
  );
};

const data = [
  {
    title: "Personal Info",
    content: [
      {
        fileName: "me",
        fileContent: PersonalInfo,
      },
    ],
  },
  {
    title: "Education",
    content: [{ fileName: "university", fileContent: University }],
  },
  {
    title: "Experience",
    content: [
      { fileName: "ebryx", fileContent: EbryxInternship },
      { fileName: "devfum", fileContent: DevfumInternship },
      { fileName: "devfum", fileContent: DevfumJob },
    ],
  },
];

export default data;
