import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import HomeContainer from './containers/HomeContainer';
import BaseballContainer from './containers/baseball/BaseballContainer';
import StartContainer from './containers/baseball/StartContainer';
import GameContainer from './containers/baseball/GameContainer';
import GameActionsContainer from './containers/baseball/GameActionsContainer';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="baseball" component={BaseballContainer} >
        <IndexRoute component={StartContainer} />
        <Route path=":id" component={GameContainer} />
        <Route path=":id/actions" component={GameActionsContainer} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;