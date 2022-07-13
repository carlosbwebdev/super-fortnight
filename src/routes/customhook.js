import React from 'react';
import Navbar from '../components/Navbar';
import useFetch from '../hooks/useFetch';

const Customhook = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
      <Navbar />

      <h2>Usando Custom Hooks</h2>

      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </div>
          );
        })}
    </>
  );
};

export default Customhook;
