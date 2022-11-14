import { createAction, props } from '@ngrx/store';
import { BoardItem } from './dashboard.reducer';

export const GET_ALL_BOARDS = 'SET_ALL_BOARDS';
export const GET_BOARD = 'GET_BOARD';
export const ADD_BOARD = 'ADD_BOARD';
export const PATCH_BOARD = 'PATCH_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const CLEAR_BOARDS = 'CLEAR_BOARDS';
export const ASC_SORTING_BOARD_NAME = 'ASC_SORTING_BOARD_NAME';
export const DSC_SORTING_BOARD_NAME = 'DSC_SORTING_BOARD_NAME';
export const ASC_SORTING_BOARD_DATE = 'ASC_SORTING_BOARD_DATE';
export const DSC_SORTING_BOARD_DATE = 'DSC_SORTING_BOARD_DATE';
export const FILTER_NAME = 'FILTER_NAME';

export const getAllBoards = createAction(GET_ALL_BOARDS, props<{ boards: BoardItem[] }>());
export const getBoard = createAction(GET_BOARD, props<{ id: string }>());
export const addBoard = createAction(ADD_BOARD, props<{ board: BoardItem }>());
export const patchBoard = createAction(PATCH_BOARD, props<{ board: BoardItem }>());
export const deleteBoard = createAction(DELETE_BOARD, props<{ id: string }>());
export const clearBoards = createAction(CLEAR_BOARDS);
export const ascSortingByBoardName = createAction(ASC_SORTING_BOARD_NAME);
export const dscSortingByBoardName = createAction(DSC_SORTING_BOARD_NAME);
export const ascSortingByBoardDate = createAction(ASC_SORTING_BOARD_DATE);
export const dscSortingByBoardDate = createAction(DSC_SORTING_BOARD_DATE);
export const filterBoardName = createAction(FILTER_NAME, props<{ filterText: string }>());