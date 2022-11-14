import { createAction, props } from "@ngrx/store"
import { Action } from "rxjs/internal/scheduler/Action"
import { CommentItem } from "./task.reducer";

const ADD_ALL_COMMENTS = 'ADD_ALL_COMMENTS';
// const SELECT_DETAIL_COMMENTS = 'SELECT_DETAIL_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const addAllComments = createAction(ADD_ALL_COMMENTS, props<{ comments: CommentItem[] }>());
export const addComment = createAction(ADD_COMMENT, props<{ comment: CommentItem }>())

// export const selectDetailComments = createAction(SELECT_DETAIL_COMMENTS, props<{ detailId: string }>())