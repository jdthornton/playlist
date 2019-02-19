import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import SearchBox from '../../containers/SearchBox';
import Track from '../../containers/Track';
import Toast from '../../containers/Toast';
import loader from '../../images/loading.svg';
import styles from './index.css';

const Playlist = ({isLoading, tracks, mainTrack, userPlaylist, savePlaylist, addTrack, removeTrack, makePlaylist}) => {
  if (isLoading) {
      return (
          <div className={styles.loader}>
              <img src={loader} />
          </div>
      )
  }

  return (
      <div>
          <div className={styles.info}>
            <Toast
              className={styles.toastList}
              animations={{
                enter: styles.enter,
                enterActive: styles.enterActive,
                exit: styles.exit,
                exitActive: styles.exitActive
              }}
              animationTime={300}
              delay={1500}
            />
              {!tracks.length &&
                  <div>Could not load playlist</div>
              }
              {mainTrack &&
                  <Parallax
                      bgImage={mainTrack.image}
                      strength={500}
                  >
                      <div className={styles.header}>
                          <Link to="/" className={styles.closeBtn}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="30" viewBox="0 0 24 24" width="30">
                                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                  <path d="M0 0h24v24H0z" fill="none" />
                              </svg>
                          </Link>
                          {/*!userPlaylist && <span className={styles.saveBtn} onClick={savePlaylist}>SAVE</span>*/}
                          <div className={styles.title}>
                              {mainTrack.title}
                          </div>
                          <div className={styles.gradient}></div>
                      </div>
                  </Parallax>
              }
          </div>
          <div className={styles.playlist}>
              {!userPlaylist &&
                  <div className={styles.controls}>
                      <SearchBox
                          placeholder="Add a new song to the playlist"
                          theme={{ suggestionsContainer: styles.suggestionsContainer, input: styles.input }}
                          handleSubmit={addTrack}
                      />
                  </div>
              }
              <ul>
                  {tracks.length &&
                      tracks.map((track, i) =>
                          <Track
                              track={track}
                              key={'track_' + track.id}
                              index={i}
                              userPlaylist={userPlaylist}
                          />
                      )
                  }
              </ul>
          </div>
      </div>
  )
}


export default Playlist
