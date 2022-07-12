import { React, useState, useEffect } from 'react';

const Relogio = ({ name }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return (
    <>
      <h3>Relógio {name}</h3>
      <p>{time}</p>
    </>
  );
};

export default Relogio;
