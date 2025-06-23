import Image from "next/image";
import Link from "next/link";
import navbarLogo from "../../assets/images/navbarLogo.png";

// !Navbar logo
export default function NavbarLogo() {
  return (
    <Link href="/" className="block aspect-[117/36] h-full" data-cy="navbar-logo">
      <Image width={0} height={0} src={navbarLogo} className="object-cover" priority={true} alt="Navbar logo" />
    </Link>
  );
}
