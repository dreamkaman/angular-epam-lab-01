import { createAction, props } from "@ngrx/store";
import { Status } from "src/app/shared/tasks-list/tasks-list.service";
import { DetailsItem } from './details.reducer';

const GET_DETAILS = 'GET_DETAILS';
const ADD_DETAIL = 'ADD_DETAIL';
const DELETE_DETAIL = 'DELETE_DETAIL';
const CLEAR_DETAILS = 'CLEAR_DETAILS';
const CHANGE_STATUS = 'CHANGE_STATUS';
const PATCH_NAME = 'PATCH_NAME';


export const getDetails = createAction(GET_DETAILS, props<{ detailsAll: DetailsItem[] }>());
export const addDetail = createAction(ADD_DETAIL, props<{ detail: DetailsItem }>());
export const deleteDetail = createAction(DELETE_DETAIL, props<{ detail: DetailsItem }>());
export const clearDetails = createAction(CLEAR_DETAILS);
export const changeDetailStatus = createAction(CHANGE_STATUS, props<{ detail: DetailsItem, newStatus: Status }>());
export const patchDetailName = createAction(PATCH_NAME, props<{ detail: DetailsItem, newName: string }>());
