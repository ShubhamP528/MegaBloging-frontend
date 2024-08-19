import React from "react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp, FaRegCommentDots } from "react-icons/fa";
import { truncateHtml } from "../utils/utils"; // Assume you have a utility function for HTML truncation

// Function to format date
const formatDate = (dateString) => {
  const options = { month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

function PostCard(props) {
  console.log(props);

  return (
    <Link to={`/blog/${props.id}`}>
      <div className="bg-white p-6 border-b-2 shadow-md flex  md:flex-row hover:shadow-lg transition-shadow duration-300">
        {/* Left side - Author info */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <img
            src={
              props.authorImg ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt={props.author || "Author"}
            className="w-5 h-5 md:w-12 md:h-12 rounded-full object-cover"
          />
        </div>

        {/* Middle - Post content */}
        <div className="flex-grow">
          <p className="text-gray-600 pl-2 text-xs md:text-sm mb-1 text-nowrap">
            {props.author || "Author Name"}
            <span className="text-gray-400">
              {" "}
              in {props.category || "Category"}
            </span>
          </p>
          <h2 className="text-sm md:text-2xl font-bold text-gray-800 mt-1 mr-5">
            {props.Title || "Blog Title"}
          </h2>
          <div
            className="text-gray-500 mt-2 hidden md:block"
            dangerouslySetInnerHTML={{
              __html: truncateHtml(
                props.Content || "No content available",
                100
              ),
            }}
          />
          <div
            className="text-gray-500 mt-2 md:hidden text-xs md:text-balance text-wrap mr-14"
            dangerouslySetInnerHTML={{
              __html: truncateHtml(props.Content || "No content available", 50),
            }}
          />

          {/* Footer with date, likes, and comments */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4">
            <span className="mr-2">{formatDate(props.date) || "Date"}</span>
            <span className="mx-2">&bull;</span>
            <span className="flex items-center mr-2">
              <FaRegThumbsUp className="mr-1" />
              {props.likes || "15"}
            </span>
            <span className="mx-2">&bull;</span>
            <span className="flex items-center">
              <FaRegCommentDots className="mr-1" />
              {props.comments || "5"}
            </span>
          </div>
        </div>

        {/* Right side - Post image */}
        {props.Img && (
          <div className="mt-6 md:mt-0 md:ml-6">
            <img
              src={props.Img}
              alt={props.Title || "Post Image"}
              className="object-cover rounded-md md:h-[150px] w-[80px] h-[80px] md:w-[150px] max-w-none"
              // style={{ width: "100%", height: "auto" }} // Adjust image size for mobile and desktop
            />
          </div>
        )}
      </div>
    </Link>
  );
}

export default PostCard;
