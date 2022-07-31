import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId) => async (dispatch) => {
  dispatch({ type: SIGN_IN, payload: userId });
};
export const signOut = (userId) => async (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
