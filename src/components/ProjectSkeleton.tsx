import React from "react";
import Skeleton from "./Skeleton";

interface ProjectSkeletonProps {
  alignRight?: boolean;
}

const ProjectSkeleton: React.FC<ProjectSkeletonProps> = ({
  alignRight = false,
}) => {
  return (
    <div
      className={`my-6 flex flex-col md:flex-row w-full ${
        alignRight ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`w-full md:w-2/5 ${alignRight ? "md:pl-4" : "md:pr-4"}`}>
        <Skeleton
          variant="rectangular"
          height={180}
          className={`rounded-lg my-10 ${alignRight ? "ml-auto" : ""}`}
        />
      </div>

      <div
        className={`my-14 w-full md:w-3/5 flex flex-col ${
          alignRight ? "text-right md:pr-4" : "text-left md:pl-4"
        }`}
      >
        <Skeleton variant="text" width="60%" height={32} className="mb-4" />
        <Skeleton variant="text" width="40%" height={16} className="mb-4" />
        <Skeleton variant="text" width="100%" height={16} className="mb-2" />
        <Skeleton variant="text" width="100%" height={16} className="mb-2" />
        <Skeleton variant="text" width="80%" height={16} className="mb-6" />

        <Skeleton variant="text" width="20%" height={12} className="mb-4" />

        <div className="border-t-[0.5px] border-gray-200 mb-4 w-full"></div>

        <div
          className={`flex flex-wrap gap-2 ${
            alignRight ? "justify-end" : "justify-start"
          }`}
        >
          <Skeleton
            variant="text"
            width={80}
            height={24}
            className="rounded-full"
          />
          <Skeleton
            variant="text"
            width={60}
            height={24}
            className="rounded-full"
          />
          <Skeleton
            variant="text"
            width={90}
            height={24}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
