import React from 'react';

import Navbar from '../components/Navbar';
import Post from '../components/Post';
import RelogioUserInput from '../components/RelogioUserInput';

const Praticadois = () => {
  return (
    <>
      <Navbar />
      <h1>Exemplo 2</h1>

      <section>
        <RelogioUserInput />
        <br />
        <br />
        <hr />
        <h3>Ultimos 5 posts Jsonplaceholder API</h3>
        <Post />
      </section>
    </>
  );
};

export default Praticadois;
