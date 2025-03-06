import React from "react";
import img1 from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";
const FavBook = () => {
  return (
    <div>
      <h2 className="w-full text-center   font-semibold text-5xl p-10">
        Favorite Books
      </h2>
      <div className="flex justify-between w-full p-10 ">
        <div className="w-1/2 p-5">
          <img src={img1} alt="" />
        </div>
        <div className="flex flex-col p-10 justify-center h-auto w-1/2">
          <div className="">
            <h2 className="text-5xl font-bold">
              Find Your Favourite{" "}
              <h2 className="text-indigo-500 ">Book Here!</h2>{" "}
            </h2>
            <p className=" py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae ab illum accusantium sed cumque sit esse cupiditate
              sint blanditiis, voluptatem eaque magnam odio molestias natus
              tempora exercitationem aut obcaecati hic repellendus, dolorem
              illo, molestiae eveniet est ullam! Repudiandae consequatur, itaque
              in cupiditate, accusantium expedita aliquam laborum, vitae
              incidunt pariatur facere.
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="text-3xl font-extrabold">800+</h1>
                <p className="text-md font-thin ">Book Listing</p>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold">500+</h1>
                <p className="text-md font-thin">Registered Users</p>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold">1200+</h1>
                <p className="text-md font-thin">PDF Download</p>
              </div>
            </div>
            <div>
              <Link to="/shop">
                <button className="bg-indigo-700 my-4 text-white rounded-xl px-6 py-3">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
