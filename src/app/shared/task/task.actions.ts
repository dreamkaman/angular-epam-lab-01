import { createAction, props } from "@ngrx/store"
import { CommentItem } from "./task.reducer";

const ADD_COMMENTS = 'ADD_COMMENTS';

const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const addComments = createAction(ADD_COMMENTS, props<{ comments: CommentItem[] }>());
export const addComment = createAction(ADD_COMMENT, props<{ comment: CommentItem }>())
export const clearComments = createAction(CLEAR_COMMENTS);
