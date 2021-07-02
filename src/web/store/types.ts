export type initialStateProps = {
  login: string;
  password: string;
  isLogged: boolean;
};

export interface IUserData {
  login: string;
  password: string;
}

export interface IAction {
  type: string;
  payload?: IUserData;
}
