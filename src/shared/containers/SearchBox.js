import React from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

import { searchActions } from '../reducers/search';

class SearchBox extends React.PureComponent {
    onChange = (event, { newValue, method }) => {
        this.props.handleChange(newValue);
    }
    onKeyDown = (event) => {
      if(event.keyCode == 13 && this.props.value.length > 3){
        this.props.handleSubmit(this.props.suggestions[0]);
      }
    }
    handleSelection = (event, { suggestion }) => {
        this.props.handleSubmit(suggestion);
    }
    renderSuggestion(track) {
        return `${track.name}, ${track.artists[0].name}`;
    }
    getSuggestionValue(track) {
        return `${track.name}, ${track.artists[0].name}`;
    }
    shouldRenderSuggestions(input) {
        return input.length > 3;
    }
    render() {
        const inputProps = {
            type: 'text',
            placeholder: this.props.placeholder,
            onChange: this.onChange,
            value: this.props.value || '',
            onKeyDown: this.onKeyDown
        };
        return (
            <Autosuggest
                suggestions={this.props.suggestions}
                onSuggestionSelected={this.handleSelection}
                onSuggestionsFetchRequested={this.props.requestSuggestions}
                onSuggestionsClearRequested={this.props.clearSuggestions}
                inputProps={inputProps}
                renderSuggestion={this.renderSuggestion}
                getSuggestionValue={this.getSuggestionValue}
                shouldRenderSuggestions={this.shouldRenderSuggestions}
                theme={this.props.theme}
            />
        )
    }
}

export default connect(
    ({search}) => search,
    {...searchActions}
)(SearchBox);
