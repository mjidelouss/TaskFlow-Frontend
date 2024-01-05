import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from '../actions/user.action';
import { UserService } from '../service/user.service'; 

@Injectable()
export class UserEffects {

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.deleteUser),
    mergeMap(action => {
      return this.userService.deleteUser(action.userId).pipe(
        map(() => UserActions.deleteUserSuccess({ userId: action.userId })),
        catchError(() => EMPTY)
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
