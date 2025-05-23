function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://my-wp-backend.local/wp-json/wp/v2/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts", err));
  }, []);

  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

