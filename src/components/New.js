import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Keep for rich text content
  const [category, setCategory] = useState(""); // New field for category
  const [image, setImage] = useState(null); // For file uploads
  const [imageUrl, setImageUrl] = useState(""); // For image URL
  const [video, setVideo] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const user = useSelector((store) => store.auth.user);

  // Function to handle image file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setMediaPreview(URL.createObjectURL(file));
      setImageUrl(""); // Clear image URL if the user selects a file
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user?.username);
    if (user?.username === undefined) {
      navigate("/");
    }
  }, [user, navigate]);

  // Function to handle video file upload
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setMediaPreview(URL.createObjectURL(file));
    }
  };

  // Function to handle image URL input
  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    setMediaPreview(url); // Use the URL for media preview
    setImage(null); // Clear the file input if an image URL is provided
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Prepare the form data to be sent to the API
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description); // Use HTML content directly
    formData.append("category", category); // Append category to form data
    formData.append("userId", user?.userId); // Append userId to form data

    if (imageUrl) {
      formData.append("imageUrl", imageUrl); // Send image URL if provided
    }
    if (image) {
      formData.append("img", image); // Send the image file if uploaded
    }
    if (video) {
      formData.append("videoFile", video); // Send the video file if uploaded
    }

    try {
      const response = await fetch("/api/v1/blog", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the submission");
      }

      const result = await response.json();
      console.log("Blog posted successfully:", result);
      setSuccess(true);
      toast.success("Blog posted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error posting blog:", error);
      setError("Failed to post the blog. Please try again.");
      toast.error("Failed to post the blog");
    } finally {
      setLoading(false);
    }
  };

  // Reset form after successful submission
  useEffect(() => {
    if (success) {
      setTitle("");
      setDescription("");
      setCategory("");
      setImage(null);
      setImageUrl("");
      setVideo(null);
      setMediaPreview(null);
    }
  }, [success]);

  return (
    <div className="max-w-full min-w-full mx-auto bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="title"
          >
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

        {/* Rich Text Editor for Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description"
          >
            Blog Description
          </label>
          <ReactQuill
            id="description"
            value={description}
            onChange={setDescription} // Use the setter for rich text content
            className="w-full"
            placeholder="Enter your blog description"
            required
          />
        </div>

        {/* Category Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        {/* Image URL Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter an image URL"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Video Upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="video"
          >
            Upload Video
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Media Preview */}
        {mediaPreview && (
          <div className="mt-4">
            {imageUrl && (
              <img
                src={mediaPreview}
                alt="Preview"
                className="w-full rounded-md"
              />
            )}
            {image && (
              <img
                src={mediaPreview}
                alt="Preview"
                className="w-full rounded-md"
              />
            )}
            {video && (
              <video controls className="w-full rounded-md">
                <source src={mediaPreview} type={video ? video.type : ""} />
              </video>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>

        {/* Success and Error Messages */}
        {success && (
          <div className="mt-4 text-green-500 font-semibold">
            Blog posted successfully!
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-500 font-semibold">{error}</div>
        )}
      </form>
    </div>
  );
};

export default NewBlog;
