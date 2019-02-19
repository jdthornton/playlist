export const INPUT_CHANGE = 'INPUT_CHANGE';
export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS'
export const REQUEST_SUGGESTIONS__SUCCESS = 'REQUEST_SUGGESTIONS__SUCCESS';
export const REQUEST_SUGGESTIONS__FAILURE = 'REQUEST_SUGGESTIONS__FAILURE';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const MAKE_SELECTION = 'MAKE_SELECTION';

export const searchActions = {
    handleChange: payload => ({ type: INPUT_CHANGE, payload }),
    requestSuggestions: ({ value }) => ({type: REQUEST_SUGGESTIONS, payload: value}),
    clearSuggestions: () => ({ type: CLEAR_SUGGESTIONS })
};

export const makeSelection = payload => ({ type: MAKE_SELECTION, payload })

const initialState = { value: '', suggestions: [], selection: null };

const searchReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case INPUT_CHANGE:
            return {
              ...previousState,
              value: payload
            }
        case REQUEST_SUGGESTIONS__SUCCESS:
            return {
              ...previousState,
              suggestions: payload
            }
        case CLEAR_SUGGESTIONS:
            return {
              ...previousState,
              suggestions: []
            };
        case MAKE_SELECTION:
            return {
              suggestions: [],
              selection: payload
            };
        default:
            return previousState;
    }
};

export default searchReducer;
