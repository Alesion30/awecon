import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// screens
import Top from './screens/Top';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Top} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
