import { createAction, props } from '@ngrx/store';
import { BoardItem } from './dashboard.reducer';

export const GET_ALL_BOARDS = 'SET_ALL_BOARDS';
export const GET_BOARD = 'GET_BOARD';
export const ADD_BOARD = 'ADD_BOARD';
export const PATCH_BOARD = 'PATCH_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const CLEAR_BOARDS = 'CLEAR_BOARDS';

export const getAllBoards = createAction(GET_ALL_BOARDS, props<{ boards: BoardItem[] }>());
export const getBoard = createAction(GET_BOARD, props<{ id: string }>());
export const addBoard = createAction(ADD_BOARD, props<{ board: BoardItem }>());
export const patchBoard = createAction(PATCH_BOARD, props<{ id: string, name: string }>());
export const deleteBoard = createAction(DELETE_BOARD, props<{ id: string }>());
export const clearBoards = createAction(CLEAR_BOARDS);