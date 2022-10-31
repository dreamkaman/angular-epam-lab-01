import { createReducer, on } from '@ngrx/store';
import { addToken, clearToken } from './login.actions';

export interface LoginState {
    token: string | null;
};

export const initialState: LoginState = {
    token: null,
};

export const loginReducer = createReducer(
    initialState,
    on(addToken, (state, { token }) => ({ ...state, token })),
    on(clearToken, (state) => ({ ...state, token: null }))
);
