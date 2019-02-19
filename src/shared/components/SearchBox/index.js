import React from 'react';
import Autosuggest from 'react-autosuggest';

import styles from './index.css';

class SearchBox extends React.Component {
    onChange = (event, { newValue, method }) => {
        this.props.handleChange(newValue);
    }
    onKeyDown = (event) => {
      if(event.keyCode == 13 && this.props.value.length > 3){
        let selection = this.props.suggestions[0];
        this.props.makeSelection(selection);
        this.props.handleSubmit(selection);
      }
    }
    handleSelection = (event, { suggestion }) => {
        this.props.makeSelection(suggestion);
        this.props.handleSubmit(suggestion);
    }
    renderSuggestion(track) {
        return <span className={styles.suggestionItem}>{track.name}, {track.artists[0].name}</span>;
    }
    getSuggestionValue(track) {
        return `${track.name}, ${track.artists[0].name}`;
    }
    shouldRenderSuggestions(input) {
        return input.length > 3;
    }
    render() {
        const { value, suggestions, requestSuggestions, clearSuggestions, theme, placeholder } = this.props;
        const inputProps = {
            type: 'text',
            placeholder: placeholder,
            onChange: this.onChange,
            value: value || '',
            onKeyDown: this.onKeyDown
        };
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionSelected={this.handleSelection}
                onSuggestionsFetchRequested={requestSuggestions}
                onSuggestionsClearRequested={clearSuggestions}
                inputProps={inputProps}
                renderSuggestion={this.renderSuggestion}
                getSuggestionValue={this.getSuggestionValue}
                shouldRenderSuggestions={this.shouldRenderSuggestions}
                theme={Object.assign({ container: styles.container, suggestion: styles.suggestion }, theme)}
            />
        )
    }
}

export default SearchBox;
