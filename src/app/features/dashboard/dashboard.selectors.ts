import { createSelector } from "@ngrx/store";
import { Observable } from "rxjs";
import { GlobalState } from "src/store/models/store.model";

//
export const selectUser = (state: GlobalState) => state.user;

export const selectToken = createSelector(
    selectUser,
    (state: GlobalState['user']) => state.token
);

export const selectEmail = createSelector(
    selectUser,
    (state: GlobalState['user']) => state.email
);

export const selectDashboard = (state: GlobalState) => state.dashboard;

export const selectBoards = createSelector(
    selectDashboard,
    (state: GlobalState['dashboard']) => state.boards
);

export function getValue(observable: Observable<string | null>) {
    let value: string | null = null;
    observable.subscribe(data => value = data);
    return value
}