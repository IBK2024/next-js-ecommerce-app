import Button from "@/components/ui/button";

// !Navbar login button
function NavbarLoginButton() {
  return (
    <Button
      href="/login"
      className="border-2 border-primary bg-transparent hover:border-none hover:bg-secondary hover:opacity-100"
      data-cy="navbar-login-button"
    >
      Login
    </Button>
  );
}

export default NavbarLoginButton;
