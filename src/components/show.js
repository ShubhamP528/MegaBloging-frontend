import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const [blog, setBlog] = useState(null); // Set initial state to null
  const { id } = useParams();

  useEffect(() => {
    // Log the id to the console
    console.log("Fetched blog ID:", id);

    const fetchBlog = async () => {
      try {
        const fetchData = await fetch(`/api/v1/blog/${id}`, {
          method: "GET",
        });
        const json = await fetchData.json();
        setBlog(json.response); // Set the fetched data to state
        console.log(json.response);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [id]); // Include `id` in the dependency array

  if (!blog) {
    return <div>Loading...</div>; // Render a loading message while fetching the data
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-full">
      <h2 className="text-xl font-semibold mb-2">{blog.Title || "Blogging"}</h2>
      <p className="text-gray-700 mb-4">
        {blog.Content || "This is the description of a blogging website."}
      </p>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <img
          src={
            blog.Img ||
            "https://images.unsplash.com/photo-15719937206642-ca0cd57198cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHx8MHx8fHx8"
          }
          alt="Img"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Show;
