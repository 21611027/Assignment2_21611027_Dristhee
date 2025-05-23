import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

function Post() {
  const { id } = useParams(); // Get the ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}?_embed`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export default Post;
