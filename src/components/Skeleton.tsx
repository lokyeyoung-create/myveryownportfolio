import React from "react";

interface SkeletonProps {
  variant?: "text" | "rectangular" | "circular";
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rectangular",
  width = "100%",
  height = "20px",
  className = "",
  count = 1,
}) => {
  const skeletons = Array.from({ length: count });

  const baseClasses =
    "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded";

  const variantClasses = {
    text: "rounded-full",
    rectangular: "rounded-lg",
    circular: "rounded-full",
  };

  const skeletonStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
          style={skeletonStyle}
        />
      ))}
    </>
  );
};

export default Skeleton;
