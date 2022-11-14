
export interface CommentItem {
    commentId: string,
    commentText: string,
    taskId: string
}

export type CommentState = CommentItem[];