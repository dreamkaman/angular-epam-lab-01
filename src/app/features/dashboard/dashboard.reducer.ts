import { createReducer, on } from '@ngrx/store';
import * as boardActions from './dashboard.actions';

export interface BoardsState {
    boards: [{
        id: string,
        name: string,
        description: string,
        creationDate: string,
        owner: string
    }]
};

export const initialState: BoardsState = {
    boards: []
};

export const loginReducer = createReducer(
    initialState,
    on(boardActions.setAllBoards, (state, boards) => ({ ...state, boards: [...boards] })),

);