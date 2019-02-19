import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../reducers/modal';

import PlaylistSettings from '../PlaylistSettings';
import styles from './index.css';

class Modal extends React.Component {
    constructor() {
        super();
        this.renderContent = this.renderContent.bind(this);
    }
    renderContent() {
        let { error, isOpen } = this.props;

        if (isOpen === "loading") {
            return <div>Loading...</div>;
        }
        else if (error) {
            return <div onClick={this.props.closeModal}>{error}</div>;
        }
        else if (isOpen === "playlist") {
            return <PlaylistSettings savePlaylist={this.props.savePlaylist} close={this.props.closeModal} />;
        }
    }
    render() {
        let { isOpen } = this.props;

        if (isOpen) {
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

export default connect(
    ({playlist}) => playlist.modal,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Modal);
