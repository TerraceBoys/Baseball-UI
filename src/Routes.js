import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import App from "./containers/App";
import NotFound from "./components/NotFound";
import HomeContainer from "./containers/HomeContainer";
import BaseballContainer from "./containers/baseball/BaseballContainer";
import StartContainer from "./containers/baseball/StartContainer";
import GameContainer from "./containers/baseball/GameContainer";
import GameActionsContainer from "./containers/baseball/GameActionsContainer";
import PersonPickerContainer from "./containers/personPicker/PersonPickerContainer";
import BeerBoysContainer from "./containers/beerBoys/BeerBoysContainer";
import BoysContainer from "./containers/beerBoys/BoysContainer";
import AddBoyContainer from "./containers/beerBoys/AddBoyContainer";
import SpotifyContainer from "./containers/spotify/SpotifyContainer";
import PlaylistContainer from  './containers/spotify/PlaylistContainer';
import AddSongContainer from  './containers/spotify/AddSongContainer';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="baseball" component={BaseballContainer}>
        <IndexRoute component={StartContainer} />
        <Route path=":id" component={GameContainer} />
        <Route path=":id/actions" component={GameActionsContainer} />
      </Route>
      <Route path="person-picker" component={PersonPickerContainer} />
      <Route path="beer-boys" component={BeerBoysContainer}>
        <IndexRoute component={BoysContainer} />
        <Route path="add-boy" component={AddBoyContainer} />
      </Route>
      <Route path="spotify" component={SpotifyContainer}>
        <IndexRoute component={PlaylistContainer} />
        <Route path='add-song' component={AddSongContainer} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
