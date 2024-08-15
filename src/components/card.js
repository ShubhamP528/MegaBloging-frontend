// components/Card.js

import React from "react";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";

export const Card = ({ title, description, images }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-lg my-5 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Blogging</h2>
      <p className="text-gray-700 mb-4">
        This is the descriptionof blogginh wb site.......
        <span className="cursor-pointer text-blue-500">
          <Link to="/show">Read More</Link>
        </span>
      </p>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="Img"
          className="rounded-lg"
        />
      </div>

      <hr />
      <div className="flex items-center p-2 justify-between mx-10 ">
        <LikeButton />

        <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
          comment
        </button>
        <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
          send
        </button>
      </div>
      <hr />
    </div>
  );
};
