import type { FooterLinkType } from "@/components/layouts/footer/types/footerTypes";
import Link from "next/link";
import FooterHeading from "./footerHeading";

// !Props
interface Props {
  links: FooterLinkType[];
}

// !Footer links section
function FooterLinks({ links }: Props) {
  return (
    <>
      <FooterHeading>Quick Links</FooterHeading>
      <ul>
        {links?.map((link, i) => (
          <li key={i} className="mb-4 block text-lg">
            <Link data-testid="footer link" href={link.href} className="hover:text-secondary" data-cy="footer-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FooterLinks;
