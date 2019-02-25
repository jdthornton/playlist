import React from 'react';

import styles from './index.css';

const CATEGORIES = [
  {name: "Featured", slug: "featured-playlists"},
  {name: "Top", slug: "categories/toplists/playlists"},
  {name: "Focus", slug: "categories/focus/playlists"},
  {name: "Chill", slug: "categories/chill/playlists"}
];

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
            <div className={styles.header} onClick={this.toggleMenu} ref={node => { this.node = node; }}>
                <span className={styles.select}>
                    {categoryName}
                    <svg height="24" width="24" viewBox="0 0 24 24" fill="#000">
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                    </svg>
                </span>
                {this.state.menuOpen &&
                  <div className={styles.menu}>
                    {CATEGORIES.map(category =>
                      <div onClick={() => { this.props.handleSelect(category); }} className={styles.category}>{category.name}</div>
                    )}
                  </div>
                }
                {this.props.error && <svg width="28" height="28" viewBox="0 0 24 24" fill="#d28273"><title>Error</title><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>}
            </div>
        );
    }
}

export default PlaylistFilter;
