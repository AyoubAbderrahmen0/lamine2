import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";
import TaskReducer from  "./TaskReducer";

const rootReducer = combineReducers({
  UserReducer,
  ProductReducer,
  TaskReducer,
});

export default rootReducer;
