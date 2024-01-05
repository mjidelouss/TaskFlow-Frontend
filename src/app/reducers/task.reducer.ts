import { createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/task.action';
import { Task } from '../models/task.model';

// Define the initial state
export const initialState: Task[] = [];

// Create reducer function
export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { task }) => [...state, task]),
  on(TaskActions.updateTask, (state, { task }) => state.map(t => (t.id === task.id ? task : t))),
  on(TaskActions.deleteTask, (state, { taskId }) => state.filter(t => t.id.toString() !== taskId))
);
