import React from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-blue-200 md:flex-nowrap w-full  md:justify-between py-10 px-20">
        <div className="flex flex-col md:w-1/2 text-center md:text-start justify-center gap-8 p-6 items-center">
          <div>
            <h1 className="text-2xl  md:text-5xl font-bold ">
              Buy And Sell Your Books <span className="text-blue-600">for the Best Prices</span>
            </h1>
            <p className="py-5">
            Discover a world of books with <span className="text-blue-800 font-bold"> Bookify</span>, your ultimate book exchange community! Connect with fellow book lovers, share your favorite reads, and find new titles to enjoy. <br /> <br /> Our platform makes it easy to list your books, search for books others are offering, and arrange exchanges seamlessly. Join us today and be part of a vibrant community that celebrates the joy of reading and sharing knowledge.
            </p>
            <div className="md:w-1/2  flex  gap-2 justify-center">
              <input className="outline p-3 rounded-2xl outline-indigo-700 " placeholder="hello" type="search" />
              <button
                type="button"
                class="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-xl text-sm px-8 py-5 text-center "
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 p-6 h-auto justify-center">
          <BannerCard />
        </div>
      </div>
    </>
  );
};

export default Banner;
