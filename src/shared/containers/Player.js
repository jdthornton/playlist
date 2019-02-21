import React from 'react';
import { connect } from 'react-redux';

import { playerActions } from '../reducers/player';
import Player from '../components/Player';

class PlayerContainer extends React.Component {
    setAudioRef = el => { this.audio = el; }
    setProgressBarRef = el => { this.progress_bar = el; }
    componentDidUpdate(prevProps) {
        if (this.props.loadedTrack) {
            if (this.props.loadedTrack !== prevProps.loadedTrack) {
                this.audio.load();
                this.audio.play();
                setInterval(this.onUpdate, 150);
                this.audio.addEventListener('ended', this.props.playNext);
            }
            if (this.props.isPlaying !== prevProps.isPlaying) {
                if (prevProps.isPlaying) {
                    this.audio.pause();
                } else {
                    this.audio.play();
                }
            }
        }
    }

    is_progress_dirty = false;

    onUpdate =() => {
        if (this.audio && !this.is_progress_dirty) {
            let progress = this.audio.currentTime / this.audio.duration;
            this.props.updateProgress(progress);
        }
    }
    startSettingProgress = (evt) => {
        this.props.setProgressMode(true);
        this.setProgress(evt);
    }
    stopSettingProgress = (evt) => {
        this.props.setProgressMode(false);
        this.setProgress(evt);
    }
    setProgress = (evt) => {
        if (this.props.settingProgress) {
            var progress = (evt.clientX - offsetLeft(this.progress_bar)) / this.progress_bar.clientWidth;
            this.props.updateProgress(progress);
            this.is_progress_dirty = true;
        }
    }
    render() {
        if (!this.props.loadedTrack) {
            return null;
        }

        if (this.audio) {
            if (this.is_progress_dirty) {
                this.is_progress_dirty = false;

                this.audio.currentTime = this.audio.duration * this.props.progress;
            }
        }

        return(
          <Player
            isPlaying={this.props.isPlaying}
            loadedTrack={this.props.loadedTrack}
            playPrevious={this.props.playPrevious}
            togglePlay={this.props.togglePlay}
            playNext={this.props.playNext}
            startSettingProgress={this.startSettingProgress}
            setProgress={this.setProgress}
            stopSettingProgress={this.stopSettingProgress}
            setProgressBarRef={this.setProgressBarRef}
            progress={this.props.progress}
            setAudioRef={this.setAudioRef}
          />
        )
    }
}

function offsetLeft(el) {
    var left = 0;
    while (el && el !== document) {
        left += el.offsetLeft;
        el = el.offsetParent;
    }
    return left;
}

export default connect(
    ({player}) => player,
    {...playerActions}
)(PlayerContainer);
