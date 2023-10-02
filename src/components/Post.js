import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export function Post() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  async function getPost() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      if (response.status >= 200 && response.status <= 204) {
        const data = await response.json();
        setPost(data);
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
    getPost();
  }, []);
  console.log(post);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </div>
      )}
    </>
  );
}
