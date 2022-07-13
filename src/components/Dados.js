import { React, useState } from 'react';
import '../App.css';

const Dados = (props) => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor(!color);
  };
  return (
    <>
      <section className={color ? 'redColor' : ''}>
        <p>Email: {props.email}</p>
        <p>Github: {props.github}</p>
        <p>Linkedin: {props.linkedin}</p>
      </section>
      <button onClick={handleClick}>Clica-me</button>
    </>
  );
};

export default Dados;
