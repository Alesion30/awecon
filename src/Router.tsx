import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// screens
import Screen from './screens';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Screen} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
