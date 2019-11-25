import {API} from "./DAL";
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_FRIENDS = 'SET_FRIENDS';
const DELETE_FRIEND = 'DELETE_FRIEND';


const initialState = {
    users: [],
    totalCount: null,
    currentPage: 1,
    pageSize: 50,
    isLoading: false,
    friends: [],
};

export let users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.bool
            };
        case SET_FRIENDS:
            return {
                ...state,
                friends: [ ...state.friends, action.friend ]
            };
        case DELETE_FRIEND:
            return {
                ...state,
                friends: state.friends.filter(item => item !== action.friend)
            };
        default:
            return state;
    }
};

const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setIsLoading = (bool) => ({ type: SET_IS_LOADING, bool });
export const setFriends = (friend) => ({ type: SET_FRIENDS, friend });
export const deleteFriend = (friend) => ({ type: DELETE_FRIEND, friend });

export const getUsers = (currentPage, pageSize) => dispatch => {
    dispatch(setIsLoading(true));
    API.getUsers(currentPage, pageSize).then(response => {
        dispatch(setIsLoading(false));
        dispatch(setTotalCount(response.totalCount));
        dispatch(setUsers(response.items));
    })
};

export const getCurrentPage = (currentPage) => dispatch => {
    dispatch(setIsLoading(true));
    API.getUsers(currentPage).then(response => {
        dispatch(setIsLoading(false));
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsers(response.items));
    })
};





















