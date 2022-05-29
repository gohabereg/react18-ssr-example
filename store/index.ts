import { combineReducers, createStore } from 'redux';
import user, { User } from './reducers/user';

const reducer = combineReducers({ user });

export type AppState = {
  user: User
};

export function create(initialState?: AppState) {
  return createStore(reducer, initialState);
}
