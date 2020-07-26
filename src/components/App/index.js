import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { HomePage } from '../HomePage';
import { CVPage } from '../CVPage';
import * as S from './styles';

const App = () => (
        <BrowserRouter>
                <S.GlobalStyle />
                <Header />
                <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/cv" component={CVPage} />
                </Switch>
        </BrowserRouter>
);

export default App;
