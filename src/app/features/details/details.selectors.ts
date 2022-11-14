import { createSelector } from "@ngrx/store";
import { Observable } from "rxjs";
import { GlobalState } from "src/store/models/store.model";
import { DetailsItem } from "./details.reducer";

//
export const selectDetails = (state: GlobalState) => state.details;

export const selectDetailsTodo = createSelector(
    selectDetails,
    (state: GlobalState['details']) => state.todo
);

export const selectDetailsInProgress = createSelector(
    selectDetails,
    (state: GlobalState['details']) => state.inProgress
);

export const selectDetailsDone = createSelector(
    selectDetails,
    (state: GlobalState['details']) => state.done
);

export function getDetailsArray(observable: Observable<DetailsItem[]>) {
    let value: DetailsItem[] = [];
    observable.subscribe(data => value = data);
    return value
}