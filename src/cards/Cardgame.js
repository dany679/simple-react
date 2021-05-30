import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
const Cardgame = () => {
  const [mycard, setMycard] = useState(null);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/charmander')
      .then((resposta) => {
        setMycard(resposta.data);
      });
  }, []);
  if (mycard === null) {
    return <p> inicio</p>;
  }
  return (
    <>
      <h1>teste {mycard.name}</h1>
      {mycard.abilities.map((item) => (
        <li>{item.ability.name}</li>
      ))}
    </>
  );
};

export default Cardgame;
