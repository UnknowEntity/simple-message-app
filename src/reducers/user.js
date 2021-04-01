import { GET_TOKEN, LOG_OUT } from "../actions";

const user = (state = { token: null }, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case LOG_OUT:
      return {
        token: null,
      };
    default:
      return state;
  }
};

export default user;
