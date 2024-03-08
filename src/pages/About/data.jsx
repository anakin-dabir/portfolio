import JSONComponent from "../../components/JSONComponent";
import json from "../../data/data.json";

const PersonalInfo = () => {
  return (
    <>
      <div className='md:mt-5'>/*</div>
      <div className='max-w-screen-md md:ml-5'>{json.about.info}</div>
      <div>*/</div>
    </>
  );
};

const University = () => {
  return <JSONComponent content={json.about.education.university} />;
};

const EbryxInternship = () => {
  return <JSONComponent content={json.about.experience.ebryx} />;
};

const DevfumInternship = () => {
  return <JSONComponent content={json.about.experience.devfum} />;
};

const DevfumJob = () => {
  return <JSONComponent content={json.about.experience.devfum2} />;
};

const data = [
  {
    title: "Personal Info",
    content: [{ fileName: "me", fileContent: PersonalInfo }],
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
