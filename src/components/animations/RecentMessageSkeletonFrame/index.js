import React from "react";
import Skeleton from "react-loading-skeleton";
import "./style.css";

const SkeletonFrame = () => {
  const loadingRecentMessage = Array.from({ length: 7 }, (v, k) => {
    return (
      <div className="skeleton-recent-message" key={Math.random().toString()}>
        <Skeleton
          className="loading-skeleton-image-part"
          circle={true}
          height={50}
          width={50}
        />
        <div className="loading-skeleton-word-part">
          <Skeleton className="skeleton-title" />
          <Skeleton className="skeleton-message" />
        </div>
      </div>
    );
  });
  return <div>{loadingRecentMessage}</div>;
};

export default SkeletonFrame;
