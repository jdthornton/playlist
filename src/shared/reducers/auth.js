export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const LOGIN = "LOGIN";

export const login = () => ({type: LOGIN})
const initialState = { token: null, user: null };

const authReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case RECEIVE_TOKEN:
          return {
              token: payload,
              expiration: Date.now() + 3600 * 1000
          };
        case RECEIVE_USER_DATA:
          return {
              ...previousState,
              user: payload
          };
        default:
            return previousState;
    }
};

export default authReducer;
