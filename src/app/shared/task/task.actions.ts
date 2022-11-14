import { createAction, props } from "@ngrx/store"
import { Action } from "rxjs/internal/scheduler/Action"

const SELECT_ALL_COMMENTS = 'SELECT_ALL_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const selectAllComments = createAction(SELECT_ALL_COMMENTS);