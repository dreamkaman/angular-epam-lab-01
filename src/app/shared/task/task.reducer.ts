import { createReducer, on } from "@ngrx/store"
import * as taskActions from './task.actions';

export interface CommentItem {
    commentId: string,
    commentText: string,
    detailId: string
}

export type CommentsState = {
    comments: CommentItem[]
}

const initialState: CommentsState = {
    comments: []
}

export const commentsReducer = createReducer<CommentsState>(
    initialState,
    on(taskActions.addAllComments, (_state, { comments }) => ({ comments: [...comments] }))
)