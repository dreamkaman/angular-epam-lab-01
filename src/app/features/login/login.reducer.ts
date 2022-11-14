import { createReducer, on } from '@ngrx/store';
import { addUser, clearToken } from './login.actions';

export interface LoginState {
    token: string | null,
    email: string | null
};

export const initialState: LoginState = {
    token: null,
    email: null
};

export const loginReducer = createReducer(
    initialState,
    on(addUser, (state, { token, email }) => ({ ...state, token, email })),
    on(clearToken, (state) => ({ ...state, token: null, email: null }))
);
