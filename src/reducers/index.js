import user from "./user";
import messages from "./messages";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  messages,
  contacts,
  activeUserId,
});