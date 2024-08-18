import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  FaRegThumbsUp,
  FaRegCommentDots,
  FaRegBookmark,
  FaPlayCircle,
  FaShareAlt,
  FaEllipsisH,
} from "react-icons/fa";
import "./ShimmerShow.css"; // Ensure you import the CSS file
import { NODE_API_ENDPOINT } from "../utils/utils";

// Function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const Show = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetched blog ID:", id);

    const fetchBlog = async () => {
      try {
        const fetchData = await fetch(
          `${NODE_API_ENDPOINT}/api/v1/blog/${id}`,
          {
            method: "GET",
          }
        );
        const json = await fetchData.json();
        setBlog({
          ...json.response,
          Author: json.response?.userId?.username,
          Date: formatDate(json.response?.createdAt),
        });
        console.log(json.response);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Set default values if an error occurs
        setBlog({
          Title: "Default Blog Title",
          Img: "https://images.unsplash.com/photo-15719937206642-ca0cd57198cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHx8MHx8fHx8",
          Content: "This is the default content of the blog.",
          Author: "Default Author",
          AuthorImg: "https://via.placeholder.com/80",
          Date: "January 1, 2024",
          Claps: 218, // Default clap count
          Comments: 2, // Default comment count
        });
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4 w-[75vw]">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        {/* Author Section */}
        <div className="flex items-center mb-4">
          <img
            src={
              blog.AuthorImg ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt={blog.Author || "Author"}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-800 font-semibold">
              {blog.Author || "Default Author"}
            </p>
            <p className="text-gray-600 text-sm">
              {blog.Date || "January 1, 2024"}
            </p>
          </div>
        </div>

        {/* Interaction Section */}
        <div className="flex items-center justify-between mb-4 text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center hover:cursor-pointer">
              <FaRegThumbsUp />
              <span className="ml-1">{blog.Claps || 218}</span>
            </div>
            <div className="flex items-center hover:cursor-pointer">
              <FaRegCommentDots />
              <span className="ml-1">{blog.Comments || 2}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaRegBookmark className="hover:cursor-pointer" />
            <FaPlayCircle className="hover:cursor-pointer" />
            <FaShareAlt className="hover:cursor-pointer" />
            <FaEllipsisH className="hover:cursor-pointer" />
          </div>
        </div>

        {/* Blog Title and Image */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {blog.Title || "Default Blog Title"}
        </h2>
        <img
          src={
            blog.Img ||
            "https://images.unsplash.com/photo-15719937206642-ca0cd57198cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHx8MHx8fHx8"
          }
          alt={blog.Title || "Blog Image"}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        {/* Blog Content */}
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              blog.Content || "This is the default content of the blog."
            ),
          }}
        />
      </div>
    </div>
  );
};

const Shimmer = () => (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full shimmer-card-show">
      {/* Author Section */}
      <div className="flex items-center mb-4">
        <div className="shimmer-author-img w-10 h-10 rounded-full mr-4"></div>
        <div>
          <div className="shimmer-author-name h-4 bg-gray-300 rounded w-2/3 mb-1"></div>
          <div className="shimmer-date h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      {/* Interaction Section */}
      <div className="flex items-center justify-between mb-4 text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="shimmer-icon w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="shimmer-count h-4 bg-gray-300 rounded w-12"></div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="shimmer-icon w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="shimmer-count h-4 bg-gray-300 rounded w-12"></div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="shimmer-icon w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="shimmer-icon w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="shimmer-icon w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="shimmer-icon w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Blog Title and Image */}
      <div className="shimmer-title h-6 bg-gray-300 rounded w-full mb-4"></div>
      <div className="shimmer-image w-full h-64 bg-gray-300 rounded-lg mb-4"></div>

      {/* Blog Content */}
      <div className="shimmer-content bg-gray-300 rounded h-48"></div>
    </div>
  </div>
);
export default Show;
