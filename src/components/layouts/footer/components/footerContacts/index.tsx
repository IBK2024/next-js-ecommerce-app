import EmailIcon from "@/components/icons/emailIcon";
import LocationIcon from "@/components/icons/locationIcon";
import TelephoneIcon from "@/components/icons/telephoneIcon";
import FooterHeading from "../footerHeading";
import FooterContact from "./components/footerContact";

function FooterContacts() {
  return (
    <>
      <FooterHeading>Contact Us</FooterHeading>
      <ul>
        <FooterContact icon={<LocationIcon className="stroke-primary" />}>
          30 London Road, West London, W32 3JC
        </FooterContact>
        <FooterContact icon={<EmailIcon className="stroke-primary" />}>fakeemail@fake.email.com</FooterContact>
        <FooterContact icon={<TelephoneIcon className="fill-primary" />}>+44 7012345678</FooterContact>
      </ul>
    </>
  );
}

export default FooterContacts;
