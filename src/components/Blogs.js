import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const fetchData = await fetch("/api/v1/blogs", { method: "GET" });
      const json = await fetchData.json();
      console.log(json.response);
      setBlogs(json.response);
    };

    fetchBlog();
  }, []);

  console.log(blogs);

  let Cardlist = blogs.map((b) => {
    return (
      <Card
        id={b._id}
        key={b._id}
        Title={b.Title}
        Img={b.Img}
        Content={b.Content}
      />
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4">
        <nav className="container mx-auto px-4">
          <ul className="flex space-x-6 text-gray-700">
            <li className="cursor-pointer">For you</li>
            <li className="cursor-pointer">Following</li>
            <li className="cursor-pointer">Technology</li>
            <li className="cursor-pointer">Programming</li>
            <li className="cursor-pointer">React</li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 mt-6">{Cardlist}</main>
    </div>
  );
}

export default App;
