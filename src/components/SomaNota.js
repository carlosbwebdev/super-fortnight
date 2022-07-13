import React from 'react';

const SomaNota = (props) => {
  return (
    <>
      <p>Soma: {props.somaNotas}</p>
      <p>Estás {props.somaNotas >= 50 ? 'Aprovado' : 'Reprovado'}! </p>
    </>
  );
};

export default SomaNota;
