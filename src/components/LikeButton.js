import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleLike}
        className={`p-2 rounded-full transition-colors duration-200 ${
          liked ? "text-red-500" : "text-gray-400"
        }`}>
        {liked ? "❤️" : "🤍"}
      </button>
      <span className="ml-1">{liked ? "You liked this!" : "Like"}</span>
    </div>
  );
}

export default LikeButton;
