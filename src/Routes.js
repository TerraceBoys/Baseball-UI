import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import StartContainer from './containers/StartContainer';
import GameContainer from './containers/GameContainer';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={StartContainer} />
      <Route path="start" component={StartContainer} />
      <Route path="game" component={GameContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;