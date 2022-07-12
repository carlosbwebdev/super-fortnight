import { React, useState } from 'react';

const Contador = () => {
  const [counter, setCounter] = useState(0);

  const handleAdiciona = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <hr />
      <h3>Contador</h3>
      <span>{counter}</span>
      <br></br>
      <br></br>
      <button onClick={handleAdiciona}>Adiciona</button>
      <button onClick={handleRemove}>Remove</button>
      <br />
      <br />
      <hr />
    </>
  );
};

export default Contador;
