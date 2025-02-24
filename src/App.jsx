import React from "react";
import PostCard from "./components/postcard"; // Importing the PostCard component

function App() {
  const posts = [
    {
      id: 1,
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      username: "JohnDoe",
      content: "Just finished reading a great book! 📖",
    },
    {
      id: 2,
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      username: "JaneSmith",
      content: "Loving the new React update! 🚀",
    },
    {
      id: 3,
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      username: "MichaelBrown",
      content: "Had an amazing workout today! 💪",
    },
    {
      id: 4,
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
      username: "EmilyClark",
      content: "Just cooked a delicious meal! 🍳",
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center">
      {/* Centered Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">🌍 Social Media Feed</h1>

      {/* Grid Layout for Posts (2 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            profilePic={post.profilePic}
            username={post.username}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;