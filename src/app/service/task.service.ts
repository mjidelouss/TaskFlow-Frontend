import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TaskActions from '../actions/task.action';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private store: Store) {}

  getTasks() {
    this.store.dispatch(TaskActions.getTasks());
  }
  
  addTask(task: Task) {
    this.store.dispatch(TaskActions.addTask({ task }));
  }

  updateTask(task: Task) {
    this.store.dispatch(TaskActions.updateTask({ task }));
  }

  deleteTask(taskId: string) {
    this.store.dispatch(TaskActions.deleteTask({ taskId }));
  }
}
