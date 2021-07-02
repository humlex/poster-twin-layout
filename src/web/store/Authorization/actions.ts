import { IUserData } from "../types";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logInUser = (userData: IUserData) => ({
  type: LOG_IN,
  payload: userData,
});

export const logOutUser = () => ({
  type: LOG_OUT,
});
