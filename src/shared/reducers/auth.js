export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";

export const authActions = {
    login: () => ({type: LOGIN}),
    logout: () => ({ type: LOGOUT })
};

const initialState = { token: '', user: null };

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
        case LOGOUT:
          return {
              ...previousState,
              user: null
          };
        default:
            return previousState;
    }
};

export default authReducer;
