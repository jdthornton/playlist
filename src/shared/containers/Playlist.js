import React from 'react';
import { connect } from 'react-redux';

import { addTrack } from '../reducers/tracks';
import { openModal } from '../reducers/modal';
import Playlist from '../components/Playlist';

class PlaylistContainer extends React.PureComponent {
  componentWillMount(){
    if(!this.props.mainTrack){
      this.props.history.push('/')
    }
  }
  render(){
    return <Playlist {...this.props} />
  }
}

export default connect(
    ({tracks, auth}) => ({mainTrack: tracks.mainTrack, url: auth.user && auth.user.images && auth.user.images[0] && auth.user.images[0].url}),
    {addTrack, openModal}
)(PlaylistContainer);
