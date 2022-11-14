import { createSelector } from "@ngrx/store";
import { GlobalState } from "src/store/models/store.model";

const commentsState = (state: GlobalState) => state.comments;

export const selectComments = createSelector(
    commentsState,
    (state: GlobalState['comments']) => state.comments
)