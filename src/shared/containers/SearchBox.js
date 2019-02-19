import React from 'react';
import { connect } from 'react-redux';

import { searchActions, makeSelection } from '../reducers/search';
import SearchBox from '../components/SearchBox';

export default connect(
    ({search}) => search,
    {...searchActions, makeSelection}
)(SearchBox);
