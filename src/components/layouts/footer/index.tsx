import type { FooterLinkType } from "@/components/layouts/footer/types/footerTypes";
import FooterAbout from "./components/footerAbout";
import FooterColumn from "./components/footerColumn";
import FooterContacts from "./components/footerContacts";
import FooterLinks from "./components/footerLinks";

// !Props
interface Props {
  links: FooterLinkType[];
  about: string;
}

// !Footer
function Footer({ links, about }: Props) {
  return (
    <footer className="mt-auto bg-tertiary text-primary" data-cy="footer">
      <div className="mx-auto flex w-4/5 flex-col py-12 md:flex-row">
        <FooterColumn className="mb-8 w-full md:mb-0 md:w-[35%] lg:w-2/5">
          <FooterAbout about={about} />
        </FooterColumn>
        <FooterColumn className="mb-8 w-full md:mb-0 md:w-[30%] lg:w-1/5">
          <FooterLinks links={links} />
        </FooterColumn>

        <FooterColumn className="mb-8 w-full md:mb-0 md:w-[35%] lg:w-2/5">
          <FooterContacts />
        </FooterColumn>
      </div>
      <div className="py-4 text-center text-primary">
        <p>IBK2024&copy;2024 - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
