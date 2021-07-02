import { initialStateProps, IAction } from "../types";
import { LOG_IN, LOG_OUT } from "./actions";

const initialState: initialStateProps = {
  login: "r.guseinov.rgs@gmail.com",
  password: "Rauf2738",
  isLogged: false,
};

export const AuthorizationReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOG_IN:
      if (
        action.payload?.login === state.login &&
        action.payload.password === state.password
      ) {
        return { ...state, isLogged: true };
      }
      return state;
    case LOG_OUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
};
