import { User, UserActionType } from './index';

export const setUser = (payload: User) => ({
  type: UserActionType.Set,
  payload,
});

export const clearUser = () => ({
  type: UserActionType.Clear,
});
