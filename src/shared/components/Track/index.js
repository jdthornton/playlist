import React from 'react';
import { connect } from 'react-redux';
import { playerActions } from '../../reducers/player';

import styles from './index.css';

const Track = props =>
  <div className={styles.container}>
      {props.isPlaying
          ? <svg onClick={props.handlePlay} viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>

          : <svg onClick={props.handlePlay} viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
      }
      <div className={styles.name}>
          {props.track.name}, {props.track.artists[0].name}
      </div>
      <svg onClick={props.makePlaylist} viewBox="0 0 24 24">
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      <svg onClick={props.handleRemove} viewBox="0 0 24 24">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          <path d="M0 0h24v24H0z" fill="none" />
      </svg>
  </div>

export default Track
