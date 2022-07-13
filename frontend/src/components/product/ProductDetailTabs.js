import React, { useState } from "react";
import ReviewContent from "./ReviewContent";

const ProductDetailTabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  const [writeReviewClick, setWriteReviewClick] = useState(false);

  const writeReviewHandler = () => {
    setWriteReviewClick(!writeReviewClick);
  };

  const openTabHandler = (e, tabNumber) => {
    e.preventDefault();
    setOpenTab(tabNumber);
    setWriteReviewClick(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-300"
                    : "text-" + color + "-300 bg-white")
                }
                onClick={(e) => {
                  openTabHandler(e, 1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Description
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-300"
                    : "text-" + color + "-300 bg-white")
                }
                onClick={(e) => {
                  openTabHandler(e, 2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Reviews
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-300"
                    : "text-" + color + "-300 bg-white")
                }
                onClick={(e) => {
                  openTabHandler(e, 3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded">
            <div className="px-4 py-5 md:py-12 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ReviewContent
                    writeReviewClick={writeReviewClick}
                    writeReviewHandler={writeReviewHandler}
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailTabs;
