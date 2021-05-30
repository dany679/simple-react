import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './router';

import React from 'react';
//import Lugares from './Pages/Lugares/Lugares';
import Myhomer from './Pages/Home/Myhomer';
import MyHeader from './Pages/Hom2/MyHeader';
import MyFooter from './Pages/Footer/Footer';

function App() {
  return (
    <>
      <Myhomer />
      <BrowserRouter>
        <MyHeader />
        <Container>
          <Allroutes />
          {/* <Lugares /> */}
        </Container>
      </BrowserRouter>
      <MyFooter />
    </>
  );
}

export default App;
