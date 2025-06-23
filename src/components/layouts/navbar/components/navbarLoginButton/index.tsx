import Button from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

// !Props
type Props = {
  className?: string;
};

// !Navbar login button
function NavbarLoginButton({ className }: Props) {
  return (
    <Button
      href="/login"
      className={twMerge(
        "block border-2 border-primary bg-transparent hover:border-none hover:bg-secondary hover:opacity-100",
        className,
      )}
      data-cy="navbar-login-button"
    >
      Login
    </Button>
  );
}

export default NavbarLoginButton;
