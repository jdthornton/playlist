import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component'
import Helmet from 'react-helmet';

import Home from './components/Home';
const Playlist = loadable(() => import('./containers/Playlist'))
const Player = loadable(() => import('./containers/Player'))
const Toaster = loadable(() => import('./containers/Toaster'))

import './index.css'

const App = () =>
    <React.Fragment>
        <Helmet><title>Playlist</title></Helmet>
        <Player />
        <Toaster />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/:query' component={Playlist} />
        </Switch>
    </React.Fragment>


export default App;
