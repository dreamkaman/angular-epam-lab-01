import { BoardState } from "src/app/features/dashboard/dashboard.reducer";
import { LoginState } from "src/app/features/login/login.reducer";

export interface GlobalState {
    user: LoginState;
    dashboard: BoardState;
}

