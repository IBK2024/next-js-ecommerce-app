import Image from "next/image";
import Link from "next/link";
import navbarLogo from "../assets/navbar logo.png";

// !Navbar logo
export default function NavbarLogo() {
  return (
    <Link href="/" className="aspect-[117/36] h-full">
      <Image width={0} height={0} src={navbarLogo} objectFit="cover" alt="Navbar logo" />
    </Link>
  );
}
