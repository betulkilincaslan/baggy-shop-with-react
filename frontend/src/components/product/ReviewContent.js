import React from "react";
import Rating from "./Rating";
import ReviewItem from "./ReviewItem";

const ReviewContent = ({ writeReviewClick, writeReviewHandler }) => {
  return (
    <>
      <div>
        <h3 className="mb-8">Customer Reviews</h3>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1">
            <Rating />
            <span className="text-xs pb-1">Based on 1 review</span>
          </div>
          <button
            onClick={writeReviewHandler}
            className="px-4 py-2 bg-slate-100 text-sm hover:bg-slate-200 transition-all duration-300 rounded-md"
          >
            Write a review
          </button>
        </div>
        <hr className="my-4" />
      </div>
      <div
        className={`${
          writeReviewClick ? "flex" : "hidden"
        } py-4 flex-col items-center justify-items-center gap-4`}
      >
        <div className="flex flex-col gap-2 items-start">
          <label for="customer-name">Name:</label>
          <input
            type="name"
            name="customer-name"
            placeholder="Your Name"
            className="focus:outline-none border border-slate-300 placeholder:text-slate-400 px-4 py-2 rounded-md text-rose-400 w-64 md:w-96"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label for="customer-email">Email:</label>
          <input
            type="email"
            name="customer-email"
            placeholder="Your Email"
            className="focus:outline-none border border-slate-300 placeholder:text-slate-400 px-4 py-2 rounded-md text-rose-400 w-64 md:w-96"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <span>Your rating:</span>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label for="customer-review">Your Review:</label>
          <textarea
            name="customer-name"
            placeholder="Your Review"
            rows="10"
            cols="40"
            className="focus:outline-none border border-slate-300 placeholder:text-slate-400 px-4 py-2 rounded-md text-rose-400 w-64 md:w-96"
          ></textarea>
        </div>
        <button className="px-8 py-2 bg-slate-100 text-sm hover:bg-slate-200 transition-all duration-300 rounded-md uppercase mb-4">
          Submit
        </button>
        <hr className="w-full" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-8">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </>
  );
};

export default ReviewContent;
