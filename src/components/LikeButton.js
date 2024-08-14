// import React, { useState } from "react";

// const LikeButton = () => {
//   // State to track the number of likes and whether the post is liked
//   const [likes, setLikes] = useState(100); // Initial number of likes
//   const [liked, setLiked] = useState(false);

//   // Function to handle the like button click
//   const handleLikeClick = () => {
//     if (liked) {
//       setLikes(likes - 1);
//     } else {
//       setLikes(likes + 1);
//     }
//     setLiked(!liked);
//   };

//   return (
//     <button
//       onClick={handleLikeClick}
//       className={`flex items-center space-x-2 py-2 px-4 rounded-full transition ${
//         liked ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
//       } hover:bg-blue-400 hover:text-white`}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill={liked ? "white" : "currentColor"}
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         className="h-6 w-6">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M5 15a7 7 0 007 7 7 7 0 007-7V7a4 4 0 10-8 0V6a4 4 0 00-6 4v5z"
//         />
//       </svg>
//       <span>{likes}</span>
//     </button>
//   );
// };

// export default LikeButton;
