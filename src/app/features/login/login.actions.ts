// import { Injectable } from '@angular/core';//from video
// import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export const ADD_TOKEN = 'ADD_TOKEN';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';


export const addToken = createAction(ADD_TOKEN, props<{ token: string }>());
export const clearToken = createAction(CLEAR_TOKEN);