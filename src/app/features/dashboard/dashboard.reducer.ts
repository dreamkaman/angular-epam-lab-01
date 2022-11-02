import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import * as boardActions from './dashboard.actions';

export interface BoardItem {

    _id: string,
    name: string,
    description: string,
    creationDate: string,
    owner: string,
    _v: number
};

export type BoardState = {
    boards: BoardItem[];
}


export const initialState: BoardState = {
    boards: []
};

export const boardsReducer = createReducer<BoardState>(
    initialState,
    on(boardActions.getAllBoards, (state, { boards }) => ({ ...state, boards: [...boards] })),
    on(boardActions.deleteBoard, (state, { id }) => ({ ...state, boards: [...state.boards.filter((board) => board._id !== id)] })),
    on(boardActions.patchBoard, (state, { id, name }) => {
        const foundIndex = state.boards.findIndex((board) => { board._id === id });

        state.boards[foundIndex].name = name;

        return { ...state }
    }
    ),
    on(boardActions.clearBoards, (state) => ({ ...state, boards: [] }))

);