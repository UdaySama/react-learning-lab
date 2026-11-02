import React, { useEffect, useState } from "react";

function Test17() {
  const [userId, setUserId] = useState();
  const [posts, setPosts] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  useEffect(() => {
    async function getPosts() {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    }
    getPosts();
  }, [userId]);
  return (
    <div>
      <h2>Posts by User</h2>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default Test17;
