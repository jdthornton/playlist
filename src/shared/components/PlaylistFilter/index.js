import React from 'react';

import styles from './index.css';

class PlaylistFilter extends React.Component {
    state = { menuOpen: false }
    componentDidMount() {
        document.addEventListener('click', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }
    handleClick = (e) => {
        if (!this.node.contains(e.target) && this.state.menuOpen) {
            this.setState({ menuOpen: false });
        }
    }
    toggleMenu = () => {
        let { menuOpen } = this.state;
        this.setState({ menuOpen: !menuOpen });
    }
    render() {
        const { categoryName } = this.props;
        return (
            <div ref={top => { this.top = top; }} >
                <div className={styles.header} onClick={this.toggleMenu} ref={node => { this.node = node; }}>
                    <span className={styles.select}>
                        {categoryName}
                        <svg height="24" width="24" viewBox="0 0 24 24" fill="#000">
                            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                        </svg>
                    </span>
                    {this.state.menuOpen &&
                        <div className={styles.menu}>
                        <div onClick={() => { this.props.handleSelect("Featured", 'featured-playlists') }} className={styles.category}>Featured</div>
                        <div onClick={() => { this.props.handleSelect("Top", 'categories/toplists/playlists') }} className={styles.category}>Top</div>
                        <div onClick={() => { this.props.handleSelect("Focus", 'categories/focus/playlists') }} className={styles.category}>Focus</div>
                        <div onClick={() => { this.props.handleSelect("Chill", 'categories/chill/playlists') }} className={styles.category}>Chill</div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default PlaylistFilter;
