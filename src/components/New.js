import React, { useState, useEffect } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Function to handle media file upload
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    setMediaPreview(URL.createObjectURL(file));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Prepare the form data to be sent to the API
    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Content", description);
    if (media) {
      formData.append("Img", media);
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
    } catch (error) {
      console.error("Error posting blog:", error);
      setError("Failed to post the blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect to reset the form or perform any side-effects after a successful submission
  useEffect(() => {
    if (success) {
      setTitle("");
      setDescription("");
      setMedia(null);
      setMediaPreview(null);
    }
  }, [success]);

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
              {media && media.type.startsWith("image") ? (
                <img
                  src={mediaPreview}
                  alt="Preview"
                  className="w-full rounded-md"
                />
              ) : (
                <video controls className="w-full rounded-md">
                  <source src={mediaPreview} type={media ? media.type : ""} />
                </video>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}>
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
