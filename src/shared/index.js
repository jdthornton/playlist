import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component'
import Helmet from 'react-helmet';

import Home from './components/Home';
const Playlist = loadable(() => import('./containers/Playlist'))
const Player = loadable(() => import('./containers/Player'))

import styles from './index.css';

const App = () =>
    <div className={styles.container}>
        <Helmet><title>Playlist</title></Helmet>
        <Player />
        <Switch>
          <Route exact path="/playlist" component={Home} />
          <Route path='/playlist/:query' component={Playlist} />
        </Switch>
    </div>


export default App;
