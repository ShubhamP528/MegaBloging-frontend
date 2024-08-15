import React, { useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  // Function to handle media file upload
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    setMediaPreview(URL.createObjectURL(file));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the blog post submission (e.g., API call)
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Media:", media);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your blog title"
            required
          />
        </div>

        {/* Description Textarea */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description">
            Blog Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your blog description"
            rows="5"
            required></textarea>
        </div>

        {/* Media Upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="media">
            Upload Image or Video
          </label>
          <input
            type="file"
            id="media"
            accept="image/*,video/*"
            onChange={handleMediaChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {mediaPreview && (
            <div className="mt-4">
              {media.type.startsWith("image") ? (
                <img
                  src={mediaPreview}
                  alt="Preview"
                  className="w-full rounded-md"
                />
              ) : (
                <video controls className="w-full rounded-md">
                  <source src={mediaPreview} type={media.type} />
                </video>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
