import { createAction, props } from '@ngrx/store';

export const CLEAR_TOKEN = 'CLEAR_TOKEN';
export const ADD_USER = 'ADD_USER';

export const addUser = createAction(ADD_USER, props<{ token: string, email: string }>());
export const clearToken = createAction(CLEAR_TOKEN);