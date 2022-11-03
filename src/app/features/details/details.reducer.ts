import * as detailsActions from './details.actions';

import { createReducer, on } from '@ngrx/store';
//import * as boardActions from './dashboard.actions';

enum Status {
    "in progress",
    "todo",
    "done"
}

export interface DetailsItem {
    _id: string,
    boardId: string,
    name: string,
    status: string
};


export interface DetailState {
    todo: DetailsItem[],
    inProgress: DetailsItem[],
    done: DetailsItem[]
}


export const initialState: DetailState = {
    todo: [],
    inProgress: [],
    done: [],
};

export const detailsReducer = createReducer(
    initialState,
    on(detailsActions.getDetails, (_state, { detailsAll }) => {
        const todo: DetailsItem[] = detailsAll.filter(item => item.status === "todo");
        const inProgress: DetailsItem[] = detailsAll.filter(item => item.status === "in progress");
        const done: DetailsItem[] = detailsAll.filter(item => item.status === "done");

        return { todo, inProgress, done };
    })
);