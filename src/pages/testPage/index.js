import React from "react";
import SkeletonBox from "../../components/animations/skeletonBox";

const TestPage = (prop) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginRight: "15px" }}>
        <SkeletonBox width="55px" height="55px" circle />
      </div>
      <div style={{ marginTop: "5px" }}>
        <div style={{ marginBottom: "20px" }}>
          <SkeletonBox width="150px" height="15px" rounded />
        </div>
        <div>
          <SkeletonBox width="200px" height="15px" rounded />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
