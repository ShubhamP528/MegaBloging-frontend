import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  return (
    <Link to={`/blog/${props.id}`}>
      <div className="bg-white p-6 rounded-lg shadow-md flex mb-6">
        <div className="flex-grow">
          <p className="text-gray-600 text-sm">
            {props.author}
            {props.category}
          </p>
          <h2 className="text-xl font-bold text-gray-800 mt-2">
            {props.Title}
          </h2>
          <p className="text-gray-600 mt-2">{props.Content}</p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <span>{props.date}</span>
            <span className="mx-2">&bull;</span>
            <span>{props.id} </span>
            <span className="mx-2">&bull;</span>
            <span>{props.comments} comments</span>
          </div>
        </div>
        <div className="ml-6">
          <img
            src={props.Img}
            alt={props.Title}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
