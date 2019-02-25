import { connect } from 'react-redux';

import { makePlaylist } from '../reducers/tracks';
import SearchBox from '../containers/SearchBox';

export default connect(
    null,
    {handleSubmit: makePlaylist}
)(SearchBox);
