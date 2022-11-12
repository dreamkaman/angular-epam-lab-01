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
    on(boardActions.ascSortingByName, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => a.name.localeCompare(b.name));
        return { boards: sortedBoards };
    }),
    on(boardActions.dscSortingByName, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => b.name.localeCompare(a.name));
        return { boards: sortedBoards };
    }),
    on(boardActions.ascSortingByDate, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => (new Date(a.creationDate)).getTime() - (new Date(b.creationDate)).getTime());
        return { boards: sortedBoards };
    }),
    on(boardActions.dscSortingByDate, (state) => {
        const sortedBoards = [...state.boards];
        sortedBoards.sort((a, b) => (new Date(b.creationDate)).getTime() - (new Date(a.creationDate)).getTime());
        return { boards: sortedBoards };
    }),
    on(boardActions.clearBoards, (_state) => ({ boards: [] }))

);