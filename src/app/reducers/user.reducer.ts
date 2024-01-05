import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.action';
import { User } from '../models/user.model';

// Define the initial state
export const initialState: User[] = [];

// Create reducer function
export const userReducer = createReducer(
  initialState,
  // Assuming you have actions like addUser, updateUser, deleteUser
  on(UserActions.addUser, (state, { user }) => [...state, user]),
  on(UserActions.updateUser, (state, { user }) => state.map(u => (u.id === user.id ? user : u))),
  on(UserActions.deleteUser, (state, { userId }) => state.filter(u => u.id !== userId))
);
