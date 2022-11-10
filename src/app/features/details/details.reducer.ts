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
        let newState!: DetailState;
        //Delete task from old place
        if (detail.status !== newStatus) {
            //Delete task from old place
            switch (detail.status) {
                case 'todo': newState = { ...state, todo: state.todo.filter(item => item._id !== detail._id) }; break;
                case 'in progress': newState = { ...state, inProgress: state.inProgress.filter(item => item._id !== detail._id) }; break;
                case 'done': newState = { ...state, done: state.done.filter(item => item._id !== detail._id) }; break;
                default: console.log('Bad data!')
            }
            //Add task to the new place
            switch (newStatus) {
                case 'todo': return { ...newState, todo: [...newState.todo, { ...detail, status: newStatus }] };
                case 'in progress': return { ...newState, inProgress: [...newState.inProgress, { ...detail, status: newStatus }] };
                case 'done': return { ...newState, done: [...newState.done, { ...detail, status: newStatus }] };
            }
        }
        return { ...state };
    }),
    on(detailsActions.clearDetails, (_state) => ({ todo: [], inProgress: [], done: [] }))
);