import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Simulator from '../containers/Simulator';
import PricingLanding from '../containers/PricingLanding';
import '../assets/styles/App.scss';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path = '/' component={Home}/>
      <Route exact path = '/simulator' component={Simulator}/>
      <Route exact path = '/pricing' component={PricingLanding}/>
    </Switch>
  </HashRouter>
)

export default App