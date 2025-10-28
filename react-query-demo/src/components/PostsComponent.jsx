// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const PostsComponent = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Oops! Something went wrong.</p>;

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => refetch()}
      >
        Refetch Posts
      </button>
      <ul className="space-y-4">
        {data.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
