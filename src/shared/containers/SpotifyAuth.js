import React from 'react';
import { connect } from 'react-redux';

import { authActions } from '../reducers/auth';
import SpotifyAuth from '../components/SpotifyAuth';

export default connect(
    ({ auth }) => ({ user: auth.user }),
    {...authActions}
)(SpotifyAuth);
