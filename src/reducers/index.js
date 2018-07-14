import user from "./user";
import messages from "./messages";
import typing from "./typing";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  messages,
  typing,
  contacts,
  activeUserId
});