import { combineReducers } from 'redux';
import countriesInfo from './countriesInfo';

const rootReducer = combineReducers({
  countriesInfo,
});

export default rootReducer;
