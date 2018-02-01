import links from "./linksreducer";
import comments from "./commentsreducer";
import { combineReducers } from "redux";

export default combineReducers({ links, comments });
