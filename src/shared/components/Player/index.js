import React from 'react';

import styles from './index.css';

const Player = props =>
  <React.Fragment>
      <div className={styles.popup}>
          <div className={styles.info}>
              <img width="60" height="60" src={props.loadedTrack.track.album.images[1].url} />
              <span>
                  <div>{props.loadedTrack.track.name}</div>
                  <div className={styles.artistName}>{props.loadedTrack.track.artists[0].name}</div>
              </span>
          </div>
          <div className={styles.controls}>
              <div className={styles.buttons}>
                  <svg onClick={props.playPrevious} height="28" viewBox="0 0 24 24" width="28" >
                      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                  {props.isPlaying
                      ? <svg onClick={props.togglePlay} height="28" viewBox="0 0 24 24" width="28" >
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                      </svg>

                      : <svg onClick={props.togglePlay} xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28">
                          <path d="M8 5v14l11-7z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                  }
                  <svg onClick={props.playNext} height="28" viewBox="0 0 24 24" width="28">
                      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
              </div>
              <div
                  onMouseDown={props.startSettingProgress}
                  onMouseMove={props.setProgress}
                  onMouseLeave={props.stopSettingProgress}
                  onMouseUp={props.stopSettingProgress}
                  className={styles.progress}
              >
                  <div ref={props.setProgressBarRef} className={styles.bar}>
                      <div style={{ width: (props.progress * 100) + '%' }}></div>
                  </div>
              </div>
          </div>
      </div>
      <audio ref={props.setAudioRef} src={props.loadedTrack.track.preview_url} preload='none' />
  </React.Fragment>

export default Player;
