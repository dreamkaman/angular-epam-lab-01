import { createSelector } from "@ngrx/store";
import { Observable } from "rxjs";
import { GlobalState } from "src/store/models/store.model";


export const selectComments = (state: GlobalState) => state.comments;
