import { React, useState, useEffect } from 'react';

const RelogioUserInput = () => {
  const [time, setTime] = useState('');
  const [userLat, setUserLat] = useState('');
  const [userLong, setUserLong] = useState('');

  //* Achar Local do Utilizador
  navigator.geolocation.getCurrentPosition((position) => {
    setUserLat(position.coords.latitude);
    setUserLong(position.coords.longitude);
  });

  // console.log(userLat, userLong);

  useEffect(() => {
    const getTime = async (lat, long) => {
      try {
        const res = await fetch(
          `https://justcors.com/tl_bc2f010/https://timeapi.io/api/Time/current/coordinate?latitude=${lat}&longitude=${long}`
        );

        if (!res.ok) {
          throw new Error(console.error(res.status));
        }
        const data = await res.json();

        setTime(data.dateTime);
      } catch (error) {
        console.log(error);
      }
    };
    getTime(userLat, userLong);
  }, [userLat, userLong]);

  return (
    <>
      <h2>Geolocation time zone</h2>
      <span>{time}</span>
    </>
  );
};

export default RelogioUserInput;
