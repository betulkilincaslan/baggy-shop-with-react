import React from "react";

const ReviewItem = () => {
  return (
    <div className="flex flex-col items-start gap-1 shadow-md p-4 rounded-md">
      <div className="flex items-center gap-1">
        <i className="bx bxs-heart text-rose-300 text-lg"></i>
        <i className="bx bxs-heart text-rose-300 text-lg"></i>
        <i className="bx bxs-heart text-rose-300 text-lg"></i>
        <i className="bx bxs-heart text-rose-300 text-lg"></i>
        <i className="bx bxs-heart text-rose-300 text-lg"></i>
      </div>
      <h4 className="font-medium">Customer Name</h4>
      <p className="font-medium text-sm italic mb-3">Review Date</p>
      <p className="text-sm max-w-2xl text-start leading-6">
        lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
        sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet
      </p>
    </div>
  );
};

export default ReviewItem;
