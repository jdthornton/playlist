import React from 'react';
import spotifyLogo from '../../images/spotify.png';
import styles from './index.css';

const SpotifyAuth = ({ user, login, logout }) => {
    if (user) {
        return (
            <div className={styles.position}>
                <span onClick={logout} style={{ cursor: 'pointer' }}>Logout</span>
                <img src={user.images[0].url} height="45" width="45" className={styles.user} />
            </div>
        );
    }
    return (
        <span className={styles.position} onClick={login}><img src={spotifyLogo} /></span>
    )
}

export default SpotifyAuth;
