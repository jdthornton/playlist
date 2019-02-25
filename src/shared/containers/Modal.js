import { connect } from 'react-redux';

import { closeModal, handleSavePlaylist, handleInputChange } from '../reducers/modal';
import Modal from '../components/Modal';

export default connect(
    ({modal}) => modal,
    {closeModal, handleSavePlaylist, handleInputChange}
)(Modal);
