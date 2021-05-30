import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './form.css';

const Allforms = () => {
  const [climas, setclimas] = useState([]);
  const [local, setLocal] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [about, setAbout] = useState('');
  const [Preco, setPreco] = useState(0);
  const [climaId, setClimaId] = useState(1);

  const params = useParams();
  useEffect(() => {
    if (params.id) {
      async function getUpdate() {
        const respon = await axios.get(
          'http://localhost:3001/destinos/' + params.id,
        );
        setAbout(respon.data.about);
        setLocal(respon.data.local);
        setPreco(respon.data.Preco);
        setClimaId(respon.data.climaId);
        setImageUrl(respon.data.imageUrl);
      }
      getUpdate();
    }
  }, [params.id]);
  useEffect(() => {
    async function getclimas() {
      //ao rodar meu serv db.json use --port 3001
      //json-server --watch db.json --port 3001
      const respon = await axios.get('http://localhost:3001/climas');
      setclimas(respon.data);
    }
    getclimas();
  }, []);
  if (climas === null) {
    return <p>carregando</p>;
  }
  async function SubmitForms(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3001/destinos', {
          local,
          Preco: parseFloat(Preco),
          about,
          imageUrl,
          climaId: parseInt(climaId),
        });
      } else {
        await axios.put('http://localhost:3001/destinos/' + params.id, {
          local,
          Preco: parseFloat(Preco),
          about,
          imageUrl,
          climaId: parseInt(climaId),
        });
      }

      setAbout('');
      setLocal('');
      setPreco(0);
      setClimaId(1);
      setImageUrl('');
    } catch (error) {
      alert('erro');
    }
  }
  return (
    <div>
      <br />
      <br />
      <form onSubmit={SubmitForms}>
        <div className='form-group'>
          <label htmlFor='Preco'>Preço do gasto pessoa por semana:</label>
          <input
            type='number'
            inputmode='decimal'
            step='any'
            name='Preco'
            id='Preco'
            className='form-control'
            value={Preco}
            onChange={(event) => setPreco(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='local'>Local da viagem:</label>
          <input
            type='text'
            name='local'
            id='local'
            className='form-control'
            value={local}
            onChange={(event) => setLocal(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='imageUrl'>imageUrl da viagem:</label>
          <input
            type='text'
            name='imageUrl'
            id='imageUrl'
            className='form-control'
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='about'>sobre a viagem:</label>
          <input
            type='text'
            name='about'
            id='about'
            className='form-control'
            value={about}
            onChange={(event) => setAbout(event.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='climaId'>clima da viagem:</label>
          <select
            name='climaId'
            id='climaId'
            className='form-control'
            value={climaId}
            onChange={(event) => setClimaId(event.target.value)}
          >
            {climas.map((clima) => (
              <option key={clima.id} value={clima.id}>
                {clima.tipo}
              </option>
            ))}
          </select>
        </div>
        <button className='btn btn-primary'>Enviar</button>
      </form>
    </div>
  );
};

export default Allforms;
