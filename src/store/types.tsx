export interface IState {
  list: [];
  error: null | string;
}

export interface IAction {
  type: string;
  payload: any;
}
