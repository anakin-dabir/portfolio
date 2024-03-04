import { PhoneIcon, AtRateIcon, LocationIcon, EarthIcon } from "./icons/Icons";
import Form from "../../components/Form";
import CopyComponent from "../../components/CopyComponent";
import { FormIcon } from "./icons/Icons";
import JSONComponent from "../../components/JSONComponent";
import json from "../../data/data.json";

const Email = () => {
  return (
    <CopyComponent>
      <JSONComponent content={json.contact.email} />
    </CopyComponent>
  );
};
const Phone = () => {
  return (
    <CopyComponent>
      <JSONComponent content={json.contact.phone} />
    </CopyComponent>
  );
};
const Location = () => {
  return (
    <>
      <CopyComponent>
        <JSONComponent content={json.contact.location} />
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
      { fileName: "location.json", fileContent: Location, icon: LocationIcon },
    ],
  },
];

export default data;
