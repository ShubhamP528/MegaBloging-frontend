import React, { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const fetchData = await fetch("/api/v1/blogs", { method: "GET" });
      console.log(fetchData);
    };
    fetchBlog();
  }, []);
  return <div></div>;
}

export default Blogs;
