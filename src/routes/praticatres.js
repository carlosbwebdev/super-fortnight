import { React, useState } from 'react';

import Navbar from '../components/Navbar';

const Praticatres = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          desc: desc,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();

      if (res.status === 200) {
        setName('');
        setDesc('');
        setMessage('Utilizador criado com sucesso');
      } else {
        setMessage('Some error occured');
        throw new Error(console.log(res.status));
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar />
      <h1>Exemplo 3</h1>

      <span>
        <b> Post Method</b>
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="submit" />
        <div>{message ? <p>{message}</p> : null}</div>
      </form>
    </>
  );
};

export default Praticatres;
