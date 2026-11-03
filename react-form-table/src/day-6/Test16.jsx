import React, { useState } from "react";

function Test16() {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  function getPosts() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      });
  }

  return (
    <div>
      <button onClick={getPosts}>Load Posts</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Test16;
