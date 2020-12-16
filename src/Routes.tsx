import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// screens
import TopScreen from './screens/TopScreen';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TopScreen} />
      </Switch>
    </Router>
  );
};
export default Routes;
