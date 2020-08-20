import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Burger } from '../Burger';
import { Header } from '../Header';
import { HomePage } from '../HomePage';
import { CVPage } from '../CVPage';
import { WeatherPage } from '../WeatherPage';
import { Form } from '../Form';
import * as S from './styles';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <S.GlobalStyle />

      <S.Wrapper>
        <Burger open={open} setOpen={setOpen} />
        <Header open={open} setOpen={setOpen} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cv" component={CVPage} />
          <Route path="/weather" component={WeatherPage} />
          <Route path="/form" component={Form} />
        </Switch>
      </S.Wrapper>
    </BrowserRouter>
  );
};

export default App;
