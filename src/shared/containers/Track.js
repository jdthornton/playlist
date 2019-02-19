import React from 'react';
import { connect } from 'react-redux';

import { removeTrack, makePlaylist } from '../reducers/tracks';
import { playerActions } from '../reducers/player';
import { makeSelection } from '../reducers/search';
import { addToast } from '../reducers/toast';

import Track from '../components/Track';

class TrackContainer extends React.PureComponent {
  handleRemove = () => {
      this.props.removeTrack(this.props.index);
  }
  makePlaylist = () => {
      this.props.makeSelection(this.props.track)
      this.props.makePlaylist(this.props.track.id)
  }
  handlePlay = (e) => {
      if (this.props.isSelected) {
          this.props.togglePlay();
      } else if (this.props.track.preview_url) {
          this.props.loadAndPlay(this.props.index);
      } else {
        this.props.addToast()
      }
  }
  render(){
    return <Track track={this.props.track} userPlaylist={this.props.userPlaylist} isPlaying={this.props.isPlaying} isSelected={this.props.isSelected} handleRemove={this.handleRemove} makePlaylist={this.makePlaylist} handlePlay={this.handlePlay} />
  }
}

export default connect(
    ({ player }, { track }) => ({ isPlaying: player.loadedTrack && (player.loadedTrack.track.id === track.id) && player.isPlaying, isSelected: player.loadedTrack && (player.loadedTrack.track.id === track.id) }),
    {removeTrack, makePlaylist, makeSelection, addToast, ...playerActions}
)(TrackContainer);
