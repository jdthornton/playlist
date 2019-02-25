import React from 'react';

import Track from '../../containers/Track';
import Loader from '../Loader';

import styles from './index.css';

const Tracklist = ({isLoading, tracks}) => {
  if(isLoading){
    return <Loader />
  }

  return tracks.map((track, i) =>
    <Track
        track={track}
        key={track.id}
        index={i}
    />
  )
}

export default Tracklist
