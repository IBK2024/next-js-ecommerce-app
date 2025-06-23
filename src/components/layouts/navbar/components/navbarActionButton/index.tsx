import Button from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

// !Props
type Props = {
  className?: string;
};

// !Navbar action button
function NavbarActionButton({ className }: Props) {
  return (
    <Button href="/categories" className={twMerge("block", className)} data-cy="navbar-action-button">
      Shop Now
    </Button>
  );
}

export default NavbarActionButton;
