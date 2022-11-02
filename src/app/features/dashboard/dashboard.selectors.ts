import { createSelector } from "@ngrx/store";
import { GlobalState } from "src/store/models/login.model";

//
export const selectUser = (state: GlobalState) => state.user;

export const selectToken = createSelector(
    selectUser,
    (state: GlobalState['user']) => state.token
);

export const selectDashboard = (state: GlobalState) => state.dashboard;

export const selectBoards = createSelector(
    selectDashboard,
    (state: GlobalState['dashboard']) => state.boards
);