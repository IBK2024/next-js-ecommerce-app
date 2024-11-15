import footerLogo from "@/assets/images/navbar logo.png";
import Image from "next/image";
import Link from "next/link";

// !Footer logo
function FooterLogo() {
  return (
    <Link href="/" className="block aspect-[117/36] w-1/2">
      <Image width={0} height={0} src={footerLogo} className="object-cover" alt="Footer logo" />
    </Link>
  );
}

export default FooterLogo;
