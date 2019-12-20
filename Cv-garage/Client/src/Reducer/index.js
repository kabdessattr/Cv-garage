import {combineReducers} from 'redux';
import alert from "./alert";
import auth from "./auth";
import cv from "./cv";

export default combineReducers({
alert,
auth,
cv
})