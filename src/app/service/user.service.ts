import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../actions/user.action';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store) {}

  addUser(user: User) {
    this.store.dispatch(UserActions.addUser({ user }));
  }

  updateUser(user: User) {
    this.store.dispatch(UserActions.updateUser({ user }));
  }

  deleteUser(userId: number) {
    this.store.dispatch(UserActions.deleteUser({ userId }));
  }
}
