import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// screens
import Top from './screens/Top';
import Control from './screens/Control';
import Temp from './screens/Temp';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/control" component={Control} />
        <Route exact path="/temp" component={Temp} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
