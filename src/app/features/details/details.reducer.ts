import * as detailsActions from './details.actions';

import { createReducer, on } from '@ngrx/store';
import { Status } from 'src/app/shared/tasks-list/tasks-list.service';
import { state } from '@angular/animations';
//import * as boardActions from './dashboard.actions';


export interface DetailsItem {
    _id: string,
    boardId: string,
    name: string,
    status: Status,
    createdAt: string
};


export interface DetailState {
    todo: DetailsItem[],
    inProgress: DetailsItem[],
    done: DetailsItem[],
    archived: DetailsItem[]
}


export const initialState: DetailState = {
    todo: [],
    inProgress: [],
    done: [],
    archived: []
};

export const detailsReducer = createReducer(
    initialState,
    on(detailsActions.getDetails, (_state, { detailsAll }) => {
        const todo: DetailsItem[] = detailsAll.filter(item => item.status === 'todo');
        const inProgress: DetailsItem[] = detailsAll.filter(item => item.status === 'in progress');
        const done: DetailsItem[] = detailsAll.filter(item => item.status === 'done');
        const archived: DetailsItem[] = detailsAll.filter(item => item.status === 'archived');

        return { todo, inProgress, done, archived };
    }),
    on(detailsActions.addDetail, (state, { detail }) => {
        const { status } = detail;
        // let newState: DetailsItem;
        switch (status) {
            case 'todo': return { ...state, todo: [...state.todo, detail] };
            case 'in progress': return { ...state, inProgress: [...state.inProgress, detail] };
            case 'done': return { ...state, done: [...state.done, detail] };
            case 'archived': return { ...state, archived: [...state.archived, detail] };
            default: return { ...state };
        }
    }),
    on(detailsActions.deleteDetail, (state, { detail }) => {
        const { status, _id } = detail;
        switch (status) {
            case 'todo': return { ...state, todo: state.todo.filter(item => item._id !== _id) };
            case 'in progress': return { ...state, inProgress: state.inProgress.filter(item => item._id !== _id) };
            case 'done': return { ...state, done: state.done.filter(item => item._id !== _id) };
            case 'archived': return { ...state, archived: state.archived.filter(item => item._id !== _id) };
            default: console.log('Bad data!'); return { ...state };
        }
    }),
    on(detailsActions.changeDetailStatus, (state, { detail, newStatus }) => {
        let newState!: DetailState;
        //Delete task from old place
        if (detail.status !== newStatus) {
            //Delete task from old place
            switch (detail.status) {
                case 'todo': newState = {
                    ...state,
                    todo: state.todo.filter(item => item._id !== detail._id)
                }; break;
                case 'in progress': newState = {
                    ...state,
                    inProgress: state.inProgress.filter(item => item._id !== detail._id)
                }; break;
                case 'done': newState = {
                    ...state,
                    done: state.done.filter(item => item._id !== detail._id)
                }; break;
                case 'archived': newState = {
                    ...state,
                    archived: state.archived.filter(item => item._id !== detail._id)
                }; break;
                default: console.log('Bad data!')
            }
            //Add task to the new place
            switch (newStatus) {
                case 'todo': return {
                    ...newState,
                    todo: [...newState.todo, { ...detail, status: newStatus }]
                };
                case 'in progress': return {
                    ...newState,
                    inProgress: [...newState.inProgress, { ...detail, status: newStatus }]
                };
                case 'done': return {
                    ...newState,
                    done: [...newState.done, { ...detail, status: newStatus }]
                };
                case 'archived': return {
                    ...newState,
                    archived: [...newState.archived, { ...detail, status: newStatus }]
                };
            }
        }
        return { ...state };
    }),
    on(detailsActions.patchDetailName, (state, { detail, newName }) => {
        switch (detail.status) {
            case 'todo': return {
                ...state,
                todo: state.todo.map(item => item = item._id === detail._id ? { ...item, name: newName } : item)
            };
            case 'in progress': return {
                ...state,
                inProgress: state.inProgress.map(item => item = item._id === detail._id ? { ...item, name: newName } : item)
            };
            case 'done': return {
                ...state,
                done: state.done.map(item => item = item._id === detail._id ? { ...item, name: newName } : item)
            };
            case 'archived': return {
                ...state,
                archived: state.archived.map(item => item = item._id === detail._id ? { ...item, name: newName } : item)
            };
            default: return { ...state };
        }
    }),
    on(detailsActions.ascSortByDetailName, (state) => {
        const copyState = {
            todo: [...state.todo],
            inProgress: [...state.inProgress],
            done: [...state.done],
            archived: [...state.archived]
        }

        return {
            // ...state,
            todo: copyState.todo.sort((a, b) => a.name.localeCompare(b.name)),
            inProgress: copyState.inProgress.sort((a, b) => a.name.localeCompare(b.name)),
            done: copyState.done.sort((a, b) => a.name.localeCompare(b.name)),
            archived: copyState.archived
        }

    }
    ),
    on(detailsActions.descSortByDetailName, (state) => {

        const copyState = {
            todo: [...state.todo],
            inProgress: [...state.inProgress],
            done: [...state.done],
            archived: [...state.archived]
        }

        return {
            todo: copyState.todo.sort((a, b) => b.name.localeCompare(a.name)),
            inProgress: copyState.inProgress.sort((a, b) => b.name.localeCompare(a.name)),
            done: copyState.done.sort((a, b) => b.name.localeCompare(a.name)),
            archived: copyState.archived
        }

    }
    ),
    on(detailsActions.ascSortByDetailDate, (state) => {
        const copyState = {
            todo: [...state.todo],
            inProgress: [...state.inProgress],
            done: [...state.done],
            archived: [...state.archived]
        }

        return {
            todo: copyState.todo.sort((a, b) => (new Date(a.createdAt)).getTime() - (new Date(b.createdAt)).getTime()),
            inProgress: copyState.inProgress.sort((a, b) => (new Date(a.createdAt)).getTime() - (new Date(b.createdAt)).getTime()),
            done: copyState.done.sort((a, b) => (new Date(a.createdAt)).getTime() - (new Date(b.createdAt)).getTime()),
            archived: copyState.archived
        }
    }),
    on(detailsActions.descSortByDetailDate, (state) => {
        const copyState = {
            todo: [...state.todo],
            inProgress: [...state.inProgress],
            done: [...state.done],
            archived: [...state.archived]
        }

        return {
            todo: copyState.todo.sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime()),
            inProgress: copyState.inProgress.sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime()),
            done: copyState.done.sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime()),
            archived: copyState.archived
        }
    }),
    on(detailsActions.filterByDetailName, (state, { filterText }) => {
        return {
            ...state,
            todo: [...state.todo.filter(item => {
                return item.name.toUpperCase().includes(filterText.toUpperCase());
                // item.name.includes(filterTxt);
            })],
            inProgress: [...state.inProgress.filter(item => {
                return item.name.toUpperCase().includes(filterText.toUpperCase());
                // item.name.includes(filterTxt);
            })],
            done: [...state.done.filter(item => {
                return item.name.toUpperCase().includes(filterText.toUpperCase());
                // item.name.includes(filterTxt);
            })],
            archived: [...state.archived]
        }
    }),
    on(detailsActions.clearDetails, (state) => {
        return {
            ...state,
            todo: [],
            inProgress: [],
            done: [],
            archived: []
        }
    })
);