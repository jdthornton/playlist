import React from 'react';
import { connect } from 'react-redux';

import { removeTrack, makePlaylist } from '../reducers/tracks';
import { playerActions } from '../reducers/player';
import { addToast } from '../reducers/toast';

import Track from '../components/Track';

class TrackContainer extends React.PureComponent {
  handleRemove = () => {
      this.props.removeTrack(this.props.index);
  }
  makePlaylist = () => {
      this.props.makePlaylist(this.props.track)
  }
  handlePlay = (e) => {
      if (this.props.isSelected) {
          this.props.togglePlay();
      } else if (this.props.track.preview_url) {
          this.props.loadAndPlay(this.props.index);
      } else {
        this.props.addToast("Preview Not Available")
      }
  }
  render(){
    return <Track track={this.props.track} isPlaying={this.props.isPlaying} handleRemove={this.handleRemove} makePlaylist={this.makePlaylist} handlePlay={this.handlePlay} />
  }
}

export default connect(
    ({ player }, { track }) => ({ isPlaying: player.loadedTrack && (player.loadedTrack.track.id === track.id) && player.isPlaying, isSelected: player.loadedTrack && (player.loadedTrack.track.id === track.id) }),
    {removeTrack, makePlaylist, addToast, ...playerActions}
)(TrackContainer);
