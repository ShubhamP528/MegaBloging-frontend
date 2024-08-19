import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import "./ShimmerCard.css"; // Import the external CSS file for styling
import { NODE_API_ENDPOINT } from "../utils/utils";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

const Shimmer = () => (
  <div className="shimmer-card bg-white p-6 border-b-2 w-full shadow-md flex flex-col md:flex-row">
    {/* Left side - Author info */}
    <div className="author-info flex-shrink-0 mb-4 md:mb-0 md:mr-4">
      <div className="shimmer-author-img w-10 h-10 md:w-12 md:h-12 rounded-full"></div>
    </div>

    {/* Middle - Post content */}
    <div className="post-content flex-grow">
      <div className="shimmer-author-name h-4 bg-gray-300 rounded w-2/3 mb-1"></div>
      <div className="shimmer-title h-6 bg-gray-300 rounded w-3/4 mb-2 "></div>
      <div className="shimmer-text h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="shimmer-text h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="shimmer-text h-4 bg-gray-300 rounded w-full"></div>
    </div>

    {/* Right side - Post image */}
    <div className="post-image flex-shrink-0 mt-4 md:mt-0 md:ml-6">
      <div className="shimmer-image w-20 md:w-32 md:h-32 h-20 bg-gray-300"></div>
    </div>
  </div>
);

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null); // Ref for the scrollable nav

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchBlog = async () => {
      try {
        const fetchData = await fetch(`${NODE_API_ENDPOINT}/api/v1/blogs`, {
          method: "GET",
        });
        const json = await fetchData.json();
        setBlogs(json.response);
        setFilteredBlogs(json.response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchBlog();
  }, []);

  const user = useSelector((store) => store.auth.user);

  const filterBlog = async (type) => {
    if (type === "") {
      setFilteredBlogs(blogs);
      return;
    }
    setFilteredBlogs(
      blogs.filter((blog) => {
        return blog.category === type;
      })
    );

    // Scroll to top after filtering
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateScrollButtons, 300); // Update scroll buttons after scroll animation
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      updateScrollButtons(); // Check scroll state when component mounts
    }
  }, []);

  // Render Shimmer component if loading
  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="fixed top-16 left-0 w-full bg-white shadow-md z-20">
          <div className="container mx-auto w-[70%] px-4 py-4 relative">
            {/* Left arrow for scrolling */}
            <FaChevronLeft
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                canScrollLeft ? "text-black" : "text-gray-300"
              }`}
              onClick={() => canScrollLeft && handleScroll("left")}
            />
            <ul
              className="scrollable-nav flex md:justify-start space-x-6 text-gray-700 overflow-x-auto"
              ref={scrollRef}
              onScroll={updateScrollButtons}
            >
              {user?.username && (
                <li className="cursor-pointer text-nowrap">Following</li>
              )}
              <li className="cursor-pointer text-nowrap">For you</li>
              <li className="cursor-pointer text-nowrap">Technology</li>
              <li className="cursor-pointer text-nowrap">Programming</li>
              <li className="cursor-pointer text-nowrap">React</li>
              <li className="cursor-pointer text-nowrap">Lifestyle</li>
              <li className="cursor-pointer text-nowrap">Education</li>
              <li className="cursor-pointer text-nowrap">Health</li>
              <li className="cursor-pointer text-nowrap">Entertainment</li>
            </ul>

            {/* Right arrow for scrolling */}
            <FaChevronRight
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                canScrollRight ? "text-black" : "text-gray-300"
              }`}
              onClick={() => canScrollRight && handleScroll("right")}
            />
          </div>
        </header>

        <main className="container mt-8 md:mt-5">
          {[...Array(10)].map((_, index) => (
            <Shimmer key={index} />
          ))}{" "}
          {/* Render multiple Shimmer components */}
        </main>
      </div>
    );
  }

  // Render blog cards if not loading
  const Cardlist = filteredBlogs.map((b) => (
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
        <div className="container mx-auto w-[70%] px-4 py-4 relative">
          {/* Left arrow for scrolling */}
          <FaChevronLeft
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
              canScrollLeft ? "text-black" : "text-gray-300"
            }`}
            onClick={() => canScrollLeft && handleScroll("left")}
          />
          <ul
            className="scrollable-nav flex md:justify-start space-x-6 text-gray-700 overflow-x-auto"
            ref={scrollRef}
            onScroll={updateScrollButtons}
          >
            {user?.username && (
              <li className="cursor-pointer text-nowrap">Following</li>
            )}
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("")}
            >
              For you
            </li>
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("Technology")}
            >
              Technology
            </li>
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("Programming")}
            >
              Programming
            </li>
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("React")}
            >
              React
            </li>
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("Lifestyle")}
            >
              Lifestyle
            </li>
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("Education")}
            >
              Education
            </li>
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("Health")}
            >
              Health
            </li>
            <li
              className="cursor-pointer text-nowrap"
              onClick={() => filterBlog("Entertainment")}
            >
              Entertainment
            </li>
          </ul>

          {/* Right arrow for scrolling */}
          <FaChevronRight
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
              canScrollRight ? "text-black" : "text-gray-300"
            }`}
            onClick={() => canScrollRight && handleScroll("right")}
          />
        </div>
      </header>

      <main className="container mt-8 md:mt-8">{Cardlist}</main>
    </div>
  );
}

export default Blogs;
