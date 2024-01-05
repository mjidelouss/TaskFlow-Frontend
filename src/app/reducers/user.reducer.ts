import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.action';
import { User } from '../models/user.model';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => [...state, user]),
  on(UserActions.updateUser, (state, { user }) => state.map(u => (u.id === user.id ? user : u))),
  on(UserActions.deleteUserSuccess, (state, { userId }) => state.filter(u => u.id !== userId))
);
