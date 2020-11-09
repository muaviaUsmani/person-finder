import { combineReducers } from "redux";
import persons from './persons/reducers';

const rootReducer = combineReducers({
  persons,
});

export default rootReducer;