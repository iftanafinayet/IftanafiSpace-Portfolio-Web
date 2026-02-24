export const SkeletonCard = () => {
  return (
    <div className="w-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-pulse">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tahun Skeleton */}
        <div className="md:w-1/4">
          <div className="h-6 w-20 bg-white/10 rounded-full"></div>
        </div>
        
        {/* Content Skeleton */}
        <div className="md:w-3/4 space-y-4">
          <div className="h-8 w-3/4 bg-white/10 rounded-lg"></div>
          <div className="h-4 w-1/2 bg-white/10 rounded-lg"></div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-white/5 rounded"></div>
            <div className="h-3 w-full bg-white/5 rounded"></div>
            <div className="h-3 w-2/3 bg-white/5 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};