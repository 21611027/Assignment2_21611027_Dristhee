import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api"; // this is your axios baseURL file

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts?_embed").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📰 Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "2rem" }}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default Blog;
