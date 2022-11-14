import { BoardState } from "src/app/features/dashboard/dashboard.reducer";
import { DetailState } from "src/app/features/details/details.reducer";
import { LoginState } from "src/app/features/login/login.reducer";
import { CommentsState } from "src/app/shared/task/task.reducer";


export interface GlobalState {
    user: LoginState;
    dashboard: BoardState;
    details: DetailState;
    comments: CommentsState;
}

