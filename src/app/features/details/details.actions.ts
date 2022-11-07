import { createAction, props } from "@ngrx/store";
import { DetailsItem } from './details.reducer';

const GET_DETAILS = 'GET_DETAILS';
const ADD_DETAIL = 'ADD_DETAIL';
const DELETE_DETAIL = 'DELETE_DETAIL';


export const getDetails = createAction(GET_DETAILS, props<{ detailsAll: DetailsItem[] }>());
export const addDetail = createAction(ADD_DETAIL, props<{ detail: DetailsItem }>());
export const deleteDetail = createAction(DELETE_DETAIL, props<{ detail: DetailsItem }>());

