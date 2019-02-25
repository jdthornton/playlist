import React from 'react';

import styles from './index.css';

const PlaylistSettings = props =>
  <React.Fragment>
      <svg className={styles.close} onClick={props.close} xmlns="http://www.w3.org/2000/svg" fill="#999" height="28" viewBox="0 0 24 24" width="28">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      <div className={styles.header}>Playlist Information</div>
      <input className={styles.input} name="name" type="text" placeholder="Title" value={props.name} onChange={props.handleInputChange} />
      <div>
          <label className={styles.radio}>
              <input type="radio" name="privacy" value="public" checked={props.privacy === 'public'} onChange={props.handleInputChange} />
              <span> Public </span>
          </label>
          <label className={styles.radio}>
              <input type="radio" name="privacy" value="private" checked={props.privacy === 'private'} onChange={props.handleInputChange} />
              <span> Private </span>
          </label>
      </div>
      <div onClick={props.savePlaylist} className={styles.submitBtn}>
          Save Playlist
      </div>
  </React.Fragment>

export default PlaylistSettings;
