import Button from "@/components/ui/button";

// !Not found page content
function NotFound() {
  return (
    <div className="flex h-notFoundHeight w-full items-center justify-center bg-tertiary">
      <div className="flex flex-col items-center justify-center text-center *:my-2 *:text-primary">
        <h1 className="font-bold text-9xl text-primary">404</h1>
        <h2 className="font-bold text-xl uppercase sm:text-3xl">Oops! Page not found</h2>
        <p className="text-lg sm:text-xl">Sorry the page you're looking for does not exist.</p>
        <Button href="/">Go Back to Homepage</Button>
      </div>
    </div>
  );
}

export default NotFound;
