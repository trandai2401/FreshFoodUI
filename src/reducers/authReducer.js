import { SIGN_IN, SIGN_OUT } from "../actions/types";
import history from "../history";

const INITAL_STATE = {
  isSignedIn: false,
  userId: null,
};

const authReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };

    case SIGN_OUT:
      history.push("/");
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default authReducer;
