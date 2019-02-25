import React from 'react';
import { connect } from 'react-redux';

import { requestPlaylists } from '../reducers/playlists';
import { viewPlaylist } from '../reducers/tracks';
import Playlists from '../components/Playlists';

class PlaylistsContainer extends React.PureComponent {
    componentWillMount() {
      if(!this.props.playlists.length){
        this.props.requestPlaylists({name: "Featured", slug: "featured-playlists"})
      }
    }
    render(){
      return(
        <Playlists
          isLoading={this.props.isLoading}
          playlists={this.props.playlists}
          handleClick={this.props.viewPlaylist}
        />
      )
    }

}

export default connect(
    ({playlists}) => ({playlists: playlists.playlists, isLoading: playlists.isLoading}),
    {requestPlaylists, viewPlaylist}
)(PlaylistsContainer);
