import {API} from "./DAL";
import {stopSubmit} from "redux-form";

const SET_LOGIN = 'SET_LOGIN';
const SET_PROFILE = 'SET_PROFILE';


const initialState = {
    fullName: null,
    small: null,
    id: null,
    login: null,
    email: null,
    isAuth: false
};

export let auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                ...action.data
            };
            case SET_PROFILE:
                return {
                    ...state,
                    fullName: action.fullName,
                    small: action.small
            };
        default: return state;
    }
};

const setLogin = (id, login, email, isAuth) => ({ type: SET_LOGIN, data: { id, login, email, isAuth } });
const setProfile = (small, fullName) => ({ type: SET_PROFILE, small, fullName });

export const getLogin = () => dispatch => {
    API.getLogin().then(data => {
        const { id, login, email } = data;
        dispatch(setLogin(id, login, email,  true));
    })
};

export const logout = () => dispatch => {
    API.logout().then(() => {
        dispatch(setLogin(null, null, null, false));
    })
};

export const login = (email, password, rememberMe) => dispatch => {
    API.login(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(getLogin());
        } else {
            dispatch(stopSubmit('login', { _error: response.messages.length > 0
                    ? response.messages[0] : "Some Error!" }))
        }
    })
};

export const getProfile = id => dispatch => {
    API.getProfile(id).then(data => {
        dispatch(setProfile(data.photos.small, data.fullName));
    })
};





















