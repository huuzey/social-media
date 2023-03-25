import authReducer from "./authReducer";
import postReducer from "./postReducer";

import { combineReducers } from "redux";

export const reducers = combineReducers({ postReducer, authReducer });
