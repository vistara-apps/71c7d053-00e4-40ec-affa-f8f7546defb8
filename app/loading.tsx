export default function Loading() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 animate-pulse"></div>
        <div className="text-white text-lg font-medium">Loading ChronoCritters...</div>
        <div className="text-white/70 text-sm mt-2">Preparing your virtual pets</div>
      </div>
    </div>
  );
}
