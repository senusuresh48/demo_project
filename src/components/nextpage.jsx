import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function Apiconfig() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const handleButtonClick = () => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh no");
        }
        return res.json();
      })
      .then(data => setPosts(data))
      .then(() => setShowPosts(true))
      .catch(error => console.error("Error fetching posts:", error));
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <h2>...are here</h2>
      <Button onClick={handleButtonClick}>Click to view Posts</Button>

      {showPosts && (
        <div>
          {posts.map(post => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Apiconfig;
