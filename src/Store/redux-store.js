import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as form } from "redux-form";
import { store } from "./store";
import thunkMiddleware from "redux-thunk";
import {auth} from "./auth";
import {users} from "./users";



const reducers = combineReducers({ form, store, auth, users });

export const reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = reduxStore.getState;



























