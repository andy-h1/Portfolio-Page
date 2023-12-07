import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Burger } from '../Burger';
import { Header } from '../Header';
import { HomePage } from '../HomePage';
import { CVPage } from '../CVPage';
import { WeatherPage } from '../WeatherPage';
import { FormPage } from '../FormPage';
import * as S from './styles';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <Burger open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </S.Wrapper>
  );
};

export default App;