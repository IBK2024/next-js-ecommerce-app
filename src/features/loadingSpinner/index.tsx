// !Loading spinner
function LoadingSpinner() {
  return (
    <div className="flex h-heroHeight w-screen items-center justify-center bg-tertiary">
      <div role="img" className="size-96 animate-spin rounded-full border-2 border-x-tertiary" />
    </div>
  );
}

export default LoadingSpinner;