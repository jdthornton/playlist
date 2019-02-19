import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.css';

const Playlists = props => {
  if (props.isLoading) {
      return (
          <div className={styles.loader}>Loading...</div>
      );
  }

  return (
      <React.Fragment>
          {props.playlists.map(playlist =>
              <Link
                  to={'/get?id='+playlist.id}
                  key={playlist.id}
                  className={styles.tile}
                  style={{ backgroundImage: `url(${playlist.images[0].url})` }}
                  onClick={() => { props.makeSelection(playlist) }}
              >
              </Link>
          )}
      </React.Fragment>
  );
}

export default Playlists;
