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
        return { ...state, boards: [...state.boards, board] }
    }),
    on(boardActions.deleteBoard, (state, { id }) => ({ boards: [...state.boards.filter((board) => board._id !== id)] })),
    on(boardActions.patchBoard, (state, { board }) => {
        if (board.description) {
            const newBoards = state.boards.map(oldBoard =>
                oldBoard._id === board._id ? { ...oldBoard, name: board.name, description: board.description } : oldBoard
            );

            return { ...state, boards: newBoards };
        }

        const newBoards = state.boards.map(oldBoard =>
            oldBoard._id === board._id ? { ...oldBoard, name: board.name } : oldBoard
        );

        return { ...state, boards: newBoards };

    }
    ),
    on(boardActions.ascSortingByBoardName, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => a.name.localeCompare(b.name));
        return { ...state, boards: sortedBoards };
    }),
    on(boardActions.dscSortingByBoardName, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => b.name.localeCompare(a.name));
        return { ...state, boards: sortedBoards };
    }),
    on(boardActions.ascSortingByBoardDate, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => (new Date(a.creationDate)).getTime() - (new Date(b.creationDate)).getTime());
        return { ...state, boards: sortedBoards };
    }),
    on(boardActions.dscSortingByBoardDate, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => (new Date(b.creationDate)).getTime() - (new Date(a.creationDate)).getTime());
        return { ...state, boards: sortedBoards };
    }),
    on(boardActions.clearBoards, (state) => ({ ...state, boards: [] }))

);