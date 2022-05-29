import { Action } from 'redux';

export enum UserActionType {
  Set = 'user/set',
  Clear = 'user/clear',
}

export interface User {
  username: string;
  email: string;
}

export interface SetUserAction extends Action<UserActionType.Set> {
  payload: User;
}

export interface ClearUserAction extends Action<UserActionType.Clear> {}

export type UserAction = SetUserAction | ClearUserAction;

export default (state: User | null = null, action: UserAction) => {
  switch (action.type) {
    case UserActionType.Set:
      return action.payload;
    case UserActionType.Clear:
      return null;

    default:
      return state;
  }
}
