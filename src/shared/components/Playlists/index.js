import React from 'react';

import styles from './index.css';

const Playlists = props => {
  if (props.isLoading) {
      return (
          <div className={styles.loader}>Loading...</div>
      );
  }

  if(props.playlists.length){
    return (
        <React.Fragment>
            {props.playlists.map(playlist =>
                <div
                    key={playlist.id}
                    className={styles.tile}
                    style={{ backgroundImage: `url(${playlist.images[0].url})` }}
                    onClick={() => { props.handleClick(playlist) }}
                >
                </div>
            )}
        </React.Fragment>
    );
  }

  return null
}

export default Playlists;
