import navbarLogo from "@/assets/images/navbar logo.png";
import Image from "next/image";
import Link from "next/link";

// !Navbar logo
export default function NavbarLogo() {
  return (
    <Link href="/" className="block aspect-[117/36] h-full">
      <Image width={0} height={0} src={navbarLogo} objectFit="cover" alt="Navbar logo" />
    </Link>
  );
}
