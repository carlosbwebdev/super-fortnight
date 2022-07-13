import React from 'react';

const Nota = (props) => {
  return (
    <>
      <label>Nota: {props.numNota}</label>
      <br />
      <input
        type="text"
        value={props.nota}
        onChange={(e) => props.setNota(e.target.value)}
      />
    </>
  );
};
export default Nota;
