import { createReducer, on } from "@ngrx/store"
import * as taskActions from './task.actions';

export interface CommentItem {
    commentId: string,
    text: string,
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
    on(taskActions.addComments, (state, { comments }) => ({ comments: [...state.comments, ...comments] })),
    on(taskActions.addComment, (state, { comment }) => ({
        comments: [...state.comments, comment]
    })),
    on(taskActions.clearComments, (_state) => ({ comments: [] }))
)