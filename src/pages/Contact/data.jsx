import { PhoneIcon, AtRateIcon, LocationIcon, EarthIcon } from "./icons/Icons";
import Form from "../../components/Form";
import CopyComponent from "../../components/CopyComponent";
import { FormIcon } from "./icons/Icons";
import JSONComponent from "../../components/JSONComponent";

const Email = () => {
  return (
    <CopyComponent>
      <JSONComponent content={[{ email: "anakindabir@gmail.com", copy: true }]} />
    </CopyComponent>
  );
};
const Phone = () => {
  return (
    <CopyComponent>
      <JSONComponent content={[{ phone: "(+92) 3094998057", copy: true }]} />
    </CopyComponent>
  );
};
const Location = () => {
  return (
    <>
      <CopyComponent>
        <JSONComponent content={[{ location: "Earth", copy: true }]} />
      </CopyComponent>
      <div className="box-center">
        <EarthIcon />
      </div>
    </>
  );
};

const data = [
  {
    title: "Message me",
    content: [{ fileName: "form", fileContent: Form, icon: FormIcon }],
  },
  {
    title: "Contacts",
    content: [
      { fileName: "email.json", fileContent: Email, icon: AtRateIcon },
      // { fileName: 'phone.json', fileContent: Phone, icon: PhoneIcon },
      { fileName: "location.json", fileContent: Location, icon: LocationIcon },
    ],
  },
];

export default data;
