import { React, useState } from 'react';
import Navbar from '../components/Navbar';
import Nota from '../components/Nota';
import SomaNota from '../components/SomaNota';

const Elevandostate = () => {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);

  return (
    <>
      <Navbar />
      <h2>Elevando Estado</h2>
      <Nota numNota={1} nota={nota1} setNota={setNota1} />
      <br />
      <br />
      <Nota numNota={2} nota={nota2} setNota={setNota2} />
      <br />
      <br />
      <Nota numNota={3} nota={nota3} setNota={setNota3} />
      <br />
      <br />
      <SomaNota
        somaNotas={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)}
      />
    </>
  );
};

export default Elevandostate;
