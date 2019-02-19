import React from 'react';
import { connect } from 'react-redux';

import { requestPlaylists } from '../reducers/playlists';
import { makeSelection } from '../reducers/search';
import Playlists from '../components/Playlists';

class PlaylistsContainer extends React.PureComponent {
    componentWillMount() {
      if(!this.props.playlists.length){
        this.props.requestPlaylists("Featured", 'featured-playlists')
      }
    }
    render(){
      return(
        <Playlists
          isLoading={this.props.isLoading}
          playlists={this.props.playlists}
          makeSelection={this.props.makeSelection}
        />
      )
    }

}

export default connect(
    ({playlists}) => ({playlists: playlists.playlists, isLoading: playlists.isLoading}),
    {requestPlaylists, makeSelection}
)(PlaylistsContainer);
