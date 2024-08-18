import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./ShimmerCard.css"; // Import the external CSS file for styling
import { NODE_API_ENDPOINT } from "../utils/utils";

const Shimmer = () => (
  <div className="shimmer-card bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row mb-6">
    {/* Left side - Author info */}
    <div className="author-info flex-shrink-0 mb-4 md:mb-0 md:mr-4">
      <div className="shimmer-author-img w-10 h-10 md:w-12 md:h-12 rounded-full"></div>
    </div>

    {/* Middle - Post content */}
    <div className="post-content flex-grow">
      <div className="shimmer-author-name h-4 bg-gray-300 rounded w-2/3 mb-1"></div>
      <div className="shimmer-title h-6 bg-gray-300 rounded w-full mb-2"></div>
      <div className="shimmer-text h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="shimmer-text h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="shimmer-text h-4 bg-gray-300 rounded w-full"></div>
    </div>

    {/* Right side - Post image */}
    <div className="post-image flex-shrink-0 mt-4 md:mt-0 md:ml-6">
      <div className="shimmer-image w-32 h-32 bg-gray-300 rounded-lg"></div>
    </div>
  </div>
);
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchData = await fetch(`${NODE_API_ENDPOINT}/api/v1/blogs`, {
          method: "GET",
        });
        const json = await fetchData.json();
        setBlogs(json.response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchBlog();
  }, []);

  console.log(blogs);

  // Render Shimmer component if loading
  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="fixed top-16 left-0 w-full bg-white shadow-md z-20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex space-x-6 text-gray-700">
              <li className="cursor-pointer">For you</li>
              <li className="cursor-pointer">Following</li>
              <li className="cursor-pointer">Technology</li>
              <li className="cursor-pointer">Programming</li>
              <li className="cursor-pointer">React</li>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 mt-24">
          {[...Array(5)].map((_, index) => (
            <Shimmer key={index} />
          ))}{" "}
          {/* Render multiple Shimmer components */}
        </main>
      </div>
    );
  }

  // Render blog cards if not loading
  const Cardlist = blogs.map((b) => (
    <Card
      id={b._id}
      key={b._id}
      Title={b.Title}
      Img={b.Img}
      Content={b.Content}
      category={b.category}
      author={b?.userId?.username}
      date={b.createdAt?.toString()}
    />
  ));

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="fixed top-16 left-0 w-full bg-white shadow-md z-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex space-x-6 text-gray-700">
            <li className="cursor-pointer">For you</li>
            <li className="cursor-pointer">Following</li>
            <li className="cursor-pointer">Technology</li>
            <li className="cursor-pointer">Programming</li>
            <li className="cursor-pointer">React</li>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-24">{Cardlist}</main>
    </div>
  );
}

export default Blogs;
