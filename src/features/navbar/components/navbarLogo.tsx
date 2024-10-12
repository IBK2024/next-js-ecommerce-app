import Image from "next/image";
import Link from "next/link";
import navbarLogo from "../assets/navbar logo.png";

// !Navbar logo
export default function NavbarLogo() {
  return (
    <Link href="/" className="aspect-[117/36] h-full">
      <Image src={navbarLogo} alt="Navbar logo" style={{ objectFit: "cover" }} />
    </Link>
  );
}
