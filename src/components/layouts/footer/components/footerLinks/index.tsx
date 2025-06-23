import { footerLinks } from "@/config/constants";
import Link from "next/link";
import FooterHeading from "../footerHeading";

// !Footer links section
function FooterLinks() {
  return (
    <>
      <FooterHeading>Quick Links</FooterHeading>
      <ul>
        {footerLinks.map((link, i) => (
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
