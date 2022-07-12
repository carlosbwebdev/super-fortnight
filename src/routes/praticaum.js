import React from 'react';
import Contador from '../components/Contador';
import Navbar from '../components/Navbar';
import Relogio from '../components/Relogio';

const Praticaum = () => {
  return (
    <>
      <Navbar />
      <h1>Exemplo 1</h1>
      <h2>Contador & Relógio</h2>

      <section>
        <Contador />
        <Relogio name="Local" />
      </section>
    </>
  );
};

export default Praticaum;
