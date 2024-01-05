import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '../models/task.model';

// Get the task state from the store
export const selectTaskState = createFeatureSelector<Task[]>('tasks');

// Selectors
export const selectAllTasks = createSelector(selectTaskState, tasks => tasks);
