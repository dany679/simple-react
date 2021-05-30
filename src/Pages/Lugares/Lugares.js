import axios from 'axios';
import './Lugares.css';
import React, { useEffect, useState } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const Lugares = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    async function GetDestinos() {
      //eu não coloquei meu serv na porta 3000 pra não me confundir com outra coisa minha
      const resposta = await axios.get(
        'http://localhost:3001/destinos?_expand=clima',
      );
      setDestinos(resposta.data);
      console.log(resposta.data);
    }
    GetDestinos();
  }, []);
  if (destinos.length === 0) {
    return <p>procurarndo</p>;
  }
  async function deleteLugares(idlugares) {
    try {
      await axios.delete('http://localhost:3001/destinos/' + idlugares);
      setDestinos(destinos.filter((destino) => destino.id !== idlugares));
    } catch (error) {}
    <div className='alert aleter danger'>
      <p>Erro ao excluir</p>
    </div>;
  }

  return (
    <div>
      <br />
      <h2 className='text-center'>Locais e climas</h2>
      <br />

      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
        {destinos.map((destino) => (
          <div key={destino.id} className='col mb-4'>
            <div className='card h-100   aplicarCentro'>
              <img
                className='card-img-top'
                src={destino.imageUrl}
                alt='Card  cap' //'Card  image cap
              ></img>
              <div className='card-body'>
                <h5 className='card-title'> {destino.local}</h5>
                <p className='card-text'>{destino.about}</p>

                <p>
                  {' '}
                  valor da estadia: R${parseFloat(destino.Preco).toFixed(2)}
                </p>
                <p> clima do local: {destino.clima.tipo}</p>

                {/* o bug era aqui mas depois de  atualizar o ubuntu parou*/}
                <DropdownButton
                  id='dropdown-basic-button'
                  title='     Editar card     '
                  className='d-flex justify-content-center'
                >
                  <Dropdown.Item
                    className='alert-danger'
                    onClick={() => deleteLugares(destino.id)}
                  >
                    Excluir
                  </Dropdown.Item>
                  <Dropdown.Item className=' alert-primary'>
                    <Link to={`/forms/${destino.id}`}>Modificar</Link>
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <table className='table table-dark'>
        <thead>
          <tr>
            <th>Lugares</th>
            <th className='dimin'>Climas </th>
          </tr>
        </thead>
        <tbody>
          {destinos.map((item) => (
            <tr>
              <td> {item.local}</td>
              <td> {item.climaId}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Lugares;
