import React from 'react';
import { connect } from 'react-redux';

import { requestPlaylists } from '../reducers/playlists';
import PlaylistFilter from '../components/PlaylistFilter';


export default connect(
    ({playlists}) => ({categoryName: playlists.categoryName, error: playlists.error}),
    {handleSelect: requestPlaylists}
)(PlaylistFilter);
