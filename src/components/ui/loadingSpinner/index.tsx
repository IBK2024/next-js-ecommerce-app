function LoadingSpinner() {
  return (
    <div className="flex h-heroHeight w-full items-center justify-center bg-tertiary" data-testid="loading-spinner">
      <div
        role="img"
        className="h-loadingSpinner w-loadingSpinner animate-spin rounded-full border-2 border-x-tertiary"
      />
    </div>
  );
}

export default LoadingSpinner;
