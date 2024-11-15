// !Footer newsletter
function FooterNewsletter() {
  return (
    <form action="" method="post">
      <input
        type="email"
        placeholder="Enter your email address"
        className="mt-3 block w-full rounded-md border-none bg-primary px-4 py-2 text-secondary outline-none placeholder:text-secondary"
        required={true}
      />
      <button type="submit" className="my-3 w-full rounded-lg bg-secondary px-4 py-2 text-primary hover:opacity-90">
        Subscribe
      </button>
    </form>
  );
}

export default FooterNewsletter;
