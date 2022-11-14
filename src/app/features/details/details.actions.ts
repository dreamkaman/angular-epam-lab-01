import { createAction, props } from "@ngrx/store";
import { Status } from "src/app/shared/tasks-list/tasks-list.service";
import { DetailsItem } from './details.reducer';

const GET_DETAILS = 'GET_DETAILS';
const ADD_DETAIL = 'ADD_DETAIL';
const DELETE_DETAIL = 'DELETE_DETAIL';
const CLEAR_DETAILS = 'CLEAR_DETAILS';
const CHANGE_STATUS = 'CHANGE_STATUS';
const PATCH_NAME = 'PATCH_NAME';
const ASC_SORT_BY_DETAIL_NAME = 'ASC_SORT_BY_DETAIL_NAME';
const DESC_SORT_BY_DETAIL_NAME = 'DSC_SORT_BY_DETAIL_NAME';
const ASC_SORT_BY_DETAIL_DATE = 'ASC_SORT_BY_DETAIL_DATE';
const DESC_SORT_BY_DETAIL_DATE = 'DSC_SORT_BY_DETAIL_DATE';
const FILTER_BY_DETAIL_NAME = 'FILTER_BY_DETAIL_NAME';


export const getDetails = createAction(GET_DETAILS, props<{ detailsAll: DetailsItem[] }>());
export const addDetail = createAction(ADD_DETAIL, props<{ detail: DetailsItem }>());
export const deleteDetail = createAction(DELETE_DETAIL, props<{ detail: DetailsItem }>());
export const clearDetails = createAction(CLEAR_DETAILS);
export const changeDetailStatus = createAction(CHANGE_STATUS, props<{ detail: DetailsItem, newStatus: Status }>());
export const patchDetailName = createAction(PATCH_NAME, props<{ detail: DetailsItem, newName: string }>());
export const ascSortByDetailName = createAction(ASC_SORT_BY_DETAIL_NAME);
export const descSortByDetailName = createAction(DESC_SORT_BY_DETAIL_NAME);
export const ascSortByDetailDate = createAction(ASC_SORT_BY_DETAIL_DATE);
export const descSortByDetailDate = createAction(DESC_SORT_BY_DETAIL_DATE);
export const filterByDetailName = createAction(FILTER_BY_DETAIL_NAME, props<{ filterText: string }>());


