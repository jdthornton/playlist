import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import SearchBox from '../../containers/SearchBox';
import Tracklist from '../../containers/Tracklist';
import Modal from '../../containers/Modal';

import styles from './index.css';

const Playlist = ({mainTrack, openModal, addTrack, url}) =>
  <React.Fragment>
      <Parallax
          bgImage={mainTrack.image}
          strength={1000}
          style={{flexShrink: 0}}
      >
          <div className={styles.parallax}>
              <div className={styles.gradient}>
                <Link to="/" className={styles.closeBtn}>
                  <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                </Link>
                <div className={styles.title}>
                    {mainTrack.title}
                </div>
                {url && <img src={url} className={styles.user} />}
                <span className={styles.saveBtn} onClick={openModal}>SAVE</span>
              </div>
          </div>
      </Parallax>
      <div className={styles.playlist}>
        <SearchBox
            placeholder="Add a new song to the playlist"
            theme={{ container: styles.inputContainer, suggestion: styles.suggestion, suggestionsContainer: styles.suggestionsContainer, input: styles.input }}
            handleSubmit={addTrack}
        />
        <Tracklist />
      </div>
      <Modal />
  </React.Fragment>

export default Playlist
