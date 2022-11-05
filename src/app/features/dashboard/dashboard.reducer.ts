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

    boards: BoardItem[]

}


export const initialState: BoardState = {
    boards: []
};

export const boardsReducer = createReducer<BoardState>(
    initialState,
    on(boardActions.getAllBoards, (_state, { boards }) => ({ boards: [...boards] })),
    on(boardActions.addBoard, (state, { board }) => {
        return { boards: [...state.boards, board] }
    }),
    on(boardActions.deleteBoard, (state, { id }) => ({ boards: [...state.boards.filter((board) => board._id !== id)] })),
    on(boardActions.patchBoard, (state, { board }) => {
        if (board.description) {
            const newBoards = state.boards.map(oldBoard =>
                oldBoard._id === board._id ? { ...oldBoard, name: board.name, description: board.description } : oldBoard
            );

            return { boards: newBoards };
        }

        const newBoards = state.boards.map(oldBoard =>
            oldBoard._id === board._id ? { ...oldBoard, name: board.name } : oldBoard
        );

        return { boards: newBoards };




    }
    ),
    on(boardActions.clearBoards, (_state) => ({ boards: [] }))

);