import React from 'react';
import { connect } from 'react-redux';
import qs from 'qs';

import { getPlaylist, makePlaylist, addTrack, savePlaylist } from '../reducers/tracks';
import Playlist from '../components/Playlist';

class PlaylistContainer extends React.Component {
    componentWillMount() {
      let { id } = qs.parse(this.props.location.search.slice(1));
      if(this.props.match.params.query == 'make'){
        this.props.makePlaylist(id)
      }
      else if(this.props.match.params.query == 'get'){
        this.props.getPlaylist(id)
      }
    }
    render() {
      return(
        <Playlist {...this.props.tracks} savePlaylist={this.props.savePlaylist} addTrack={this.props.addTrack} />
      )
    }
}


export default connect(
    ({tracks}) => ({tracks}),
    {getPlaylist, makePlaylist, addTrack, savePlaylist}
)(PlaylistContainer);
