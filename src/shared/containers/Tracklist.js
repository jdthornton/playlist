import { connect } from 'react-redux';

import Tracklist from '../components/Tracklist';

export default connect(
    ({tracks}) => ({tracks: tracks.tracks, isLoading: tracks.isLoading})
)(Tracklist);
