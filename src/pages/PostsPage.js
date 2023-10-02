import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPosts() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      if (response.status >= 200 && response.status <= 204) {
        const data = await response.json();
        setPosts(data);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Title</h1>
      <ul>
        {loading ? (
          <Loading />
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <Link to={`/posts/${post.id}`}> подробнее</Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
