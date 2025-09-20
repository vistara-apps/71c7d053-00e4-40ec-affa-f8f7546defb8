'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
          <span className="text-red-400 text-2xl">⚠️</span>
        </div>
        <h2 className="text-white text-xl font-semibold mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-white/70 text-sm mb-6">
          Your ChronoCritters encountered an error. Don&apos;t worry, they&apos;re safe!
        </p>
        <button
          onClick={reset}
          className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
