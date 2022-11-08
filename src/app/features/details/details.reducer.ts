import * as detailsActions from './details.actions';

import { createReducer, on } from '@ngrx/store';
//import * as boardActions from './dashboard.actions';


export interface DetailsItem {
    _id: string,
    boardId: string,
    name: string,
    status: 'todo' | 'in progress' | 'done'
};


export interface DetailState {
    todo: DetailsItem[],
    inProgress: DetailsItem[],
    done: DetailsItem[]
}


export const initialState: DetailState = {
    todo: [],
    inProgress: [],
    done: [],
};

export const detailsReducer = createReducer(
    initialState,
    on(detailsActions.getDetails, (_state, { detailsAll }) => {
        const todo: DetailsItem[] = detailsAll.filter(item => item.status === 'todo');
        const inProgress: DetailsItem[] = detailsAll.filter(item => item.status === 'in progress');
        const done: DetailsItem[] = detailsAll.filter(item => item.status === 'done');

        return { todo, inProgress, done };
    }),
    on(detailsActions.addDetail, (state, { detail }) => {
        const { status } = detail;
        // let newState: DetailsItem;
        switch (status) {
            case 'todo': return { ...state, todo: [...state.todo, detail] };
            case 'in progress': return { ...state, inProgress: [...state.inProgress, detail] };
            case 'done': return { ...state, done: [...state.done, detail] };
            default: return { ...state };
        }
    }),
    on(detailsActions.deleteDetail, (state, { detail }) => {
        const { status, _id } = detail;
        switch (status) {
            case 'todo': return { ...state, todo: state.todo.filter(item => item._id !== _id) };
            case 'in progress': return { ...state, inProgress: state.inProgress.filter(item => item._id !== _id) };
            case 'done': return { ...state, done: state.done.filter(item => item._id !== _id) };
            default: return { ...state };
        }
    }),
    on(detailsActions.changeStatus, (state, { detail, newStatus }) => {
        console.log(state);
        return { ...state };
        // switch (newStatus) {
        //     case 'todo': return {
        //         ...state,
        //         todo: state.todo.map(item => item = item._id === detail._id ? { ...item, status: newStatus } : item)
        //     };
        //     case 'in progress': return {
        //         ...state,
        //         inProgress: state.inProgress.map(item => item = item._id === detail._id ? { ...item, status: newStatus } : item)
        //     };
        //     case 'done': return {
        //         ...state,
        //         done: state.done.map(item => item = item._id === detail._id ? { ...item, status: newStatus } : item)
        //     };
        // }
    }),
    on(detailsActions.clearDetails, (_state) => ({ todo: [], inProgress: [], done: [] }))
);