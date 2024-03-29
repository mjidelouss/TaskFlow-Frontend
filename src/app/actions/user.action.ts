import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const deleteUser = createAction('[User] Delete User', props<{ userId: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ userId: number }>());
