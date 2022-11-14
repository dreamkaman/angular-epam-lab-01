import { BoardState } from "src/app/features/dashboard/dashboard.reducer";
import { DetailState } from "src/app/features/details/details.reducer";
import { LoginState } from "src/app/features/login/login.reducer";
import { CommentState } from "src/app/shared/comment/comment.reducer";


export interface GlobalState {
    user: LoginState;
    dashboard: BoardState;
    details: DetailState;
    comments: CommentState;
}

