import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Allforms from './Pages/Allforms';
//import Cardmagic from '../../../src/Cardsmagic/Cardmagic';
import Errornotfound from './Pages/error404';

import Lugares from './Pages/Lugares/Lugares';

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Lugares />} />
      <Route path='*' element={<Errornotfound />} />
      <Route path='/forms' element={<Allforms />} />
      <Route path='/forms/:id' element={<Allforms />} />
    </Routes>
  );
};

export default Allroutes;
