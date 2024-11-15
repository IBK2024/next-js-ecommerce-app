import FooterHeading from "./components/footerHeading";
import FooterLink from "./components/footerLink";
import FooterLogo from "./components/footerLogo";
import FooterNewsletter from "./components/footerNewsletter";

// !Props
interface Props {
  links?: { name: string; href: string }[];
}

// !Footer
function Footer({ links }: Props) {
  return (
    <footer className="w-screen bg-tertiary p-4 *:w-full *:text-primary">
      <div className="flex flex-wrap *:text-lg">
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <FooterLogo />
          <p>
            Here at blue store we sell the latest, the most amazing, and the best quality products at affordable prices.
          </p>
        </div>
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <FooterHeading>Links</FooterHeading>
          <ul>
            {links?.map((link, i) => (
              <FooterLink key={i} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </ul>
        </div>
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <FooterHeading>Contacts</FooterHeading>
          <p>30 London Road, West London, W32 3JC</p>
          <p className="underline">fakeemail@fake.email.com</p>
          <p className="font-semibold">+44 7012345678</p>
        </div>
        <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
          <FooterHeading>Newsletter</FooterHeading>
          <FooterNewsletter />
        </div>
      </div>
      <div className="text-center *:text-lg">
        <p>IBK2024&copy;2024 - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
