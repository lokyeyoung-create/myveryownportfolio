import React from "react";
import Skeleton from "./Skeleton";

const DetailPageSkeleton: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">
      {/* Hero Image Skeleton */}
      <Skeleton
        variant="rectangular"
        height={400}
        className="mb-24 rounded-lg"
      />

      {/* Section 1 */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <Skeleton variant="text" width="60%" height={28} className="mb-6" />
            <div className="space-y-6">
              {[...Array(4)].map((_, index) => (
                <div key={index}>
                  <Skeleton
                    variant="text"
                    width="50%"
                    height={16}
                    className="mb-2"
                  />
                  <Skeleton variant="text" width="100%" height={16} />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <Skeleton
              variant="rectangular"
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-24">
        <div className="flex flex-col-reverse md:flex-row gap-12">
          <div className="w-full md:w-2/3">
            <Skeleton
              variant="rectangular"
              height={300}
              className="rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/3">
            <Skeleton variant="text" width="60%" height={28} className="mb-6" />
            <Skeleton
              variant="text"
              width="100%"
              height={16}
              className="mb-3"
            />
            <Skeleton
              variant="text"
              width="100%"
              height={16}
              className="mb-3"
            />
            <Skeleton variant="text" width="95%" height={16} />
          </div>
        </div>
      </section>

      {/* Image Grid Skeleton */}
      <section className="mb-24">
        <Skeleton variant="text" width="40%" height={28} className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={300}
              className="rounded-lg"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailPageSkeleton;
