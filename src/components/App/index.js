import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { HomePage } from '../HomePage';
import { CVPage } from '../CVPage';

const App = () => (
  <BrowserRouter>
  <Header />
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/CV' component={CVPage} />
  </Switch>
  </BrowserRouter>
)

export default App; 