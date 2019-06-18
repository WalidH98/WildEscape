import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from '../Accueil/Acceuil'
import SignUpPage from '../SignUpPage/SignUpPage';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Accueil} />
      <Route exact path='/signup' component={SignUpPage} />
    </Switch>
  )
}
