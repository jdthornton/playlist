import React from 'react';

import PlaylistSettings from '../PlaylistSettings';
import styles from './index.css';

class Modal extends React.PureComponent {
    handleSubmit = () => {
      this.props.handleSavePlaylist(this.props.name, this.props.privacy)
    }
    renderContent = () => {
        if (this.props.isLoading) {
            return <div className={styles.loader}>Loading...</div>;
        }
        else if (this.props.error) {
            return <div>{error}</div>;
        }
        else {
            return <PlaylistSettings name={this.props.name} privacy={this.props.privacy} savePlaylist={this.handleSubmit} close={this.props.closeModal} handleInputChange={this.props.handleInputChange} />;
        }
    }
    render() {
        if (this.props.isOpen) {
            return (
                <div className={styles.container}>
                    <div className={styles.content}>
                        {this.renderContent()}
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default Modal;
