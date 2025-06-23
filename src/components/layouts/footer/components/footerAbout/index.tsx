import FacebookIcon from "@/components/icons/facebookIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import { siteDescription } from "@/config/constants";
import FooterHeading from "../footerHeading";
import FooterSocialIcon from "./components/footerSocialIcon";

// !Footer about section
function FooterAbout() {
  return (
    <>
      <FooterHeading>About</FooterHeading>
      <p>{siteDescription}</p>
      <div className="mt-8">
        <ul className="flex">
          <FooterSocialIcon href="/">
            <FacebookIcon className="mx-auto stroke-primary group-hover:stroke-secondary" />
          </FooterSocialIcon>
          <FooterSocialIcon href="/">
            <InstagramIcon className="mx-auto fill-primary stroke-fill group-hover:fill-secondary group-hover:stroke-secondary" />
          </FooterSocialIcon>
          <FooterSocialIcon href="/">
            <LinkedinIcon className="mx-auto fill-primary group-hover:fill-secondary" />
          </FooterSocialIcon>
        </ul>
      </div>
    </>
  );
}

export default FooterAbout;
