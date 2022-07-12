import { React, useState, useEffect } from 'react';

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
          throw new Error(console.log(res.status));
        }
        const data = await res.json();
        //console.log(data);
        setPost(data);
      } catch (e) {
        console.log(e);
      }
    };
    getPost();
  }, [post]);

  return (
    <>
      {post.slice(0, 5).map((article) => {
        return (
          <article key={article.id}>
            <h2>Post nº{article.id}</h2>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <hr />
          </article>
        );
      })}
    </>
  );
};

export default Post;
