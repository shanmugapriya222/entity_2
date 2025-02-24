import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ profilePic, username, content }) => {
  return (
    <div className="p-4 border border-gray-300 shadow-lg rounded-lg bg-white w-80">
      {/* Profile Section */}
      <div className="flex items-center space-x-3 mb-2">
        <img
          src={profilePic}
          alt={username}
          className="w-12 h-12 rounded-full border border-gray-400"
        />
        <h2 className="text-lg font-semibold">{username}</h2>
      </div>

      {/* Post Content */}
      <p className="text-gray-700 mb-4">{content}</p>

      {/* Like Button */}
      <LikeButton />
    </div>
  );
};

export default PostCard;