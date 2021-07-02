export type initialStateProps = {
  email: string;
  password: string;
  isLogged: boolean;
};

export interface IUseSelectorState {
  Authorization: initialStateProps;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IAction {
  type: string;
  payload?: IUserData;
}
