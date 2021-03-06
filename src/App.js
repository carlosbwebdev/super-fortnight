import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import info from './assets/info';
import UserImage from '../src/assets/user.jpg';
import Navbar from './components/Navbar';
import Dados from './components/Dados';

function App() {
  const [className, setClassName] = useState(false);

  const handleClick = () => {
    setClassName(!className);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',

          margin: '0 auto',
        }}
      >
        <img
          className={className ? 'appLogo' : 'appLogoLeft'}
          src={UserImage}
          alt=""
          style={{ width: '50%' }}
        />
        <p>{`O meu nome é ${info.nome} ${info.apelido}, tenho ${info.idade} anos de idade e sou ${info.profissão}!`}</p>

        <button onClick={handleClick}>Clica me</button>
        <Dados
          email="carlosbwebdev@gmail.com"
          github="github.com/carloswebdev"
          linkedin="carlosBarros-dev"
        />
      </main>
      <Outlet />
    </>
  );
}

export default App;
