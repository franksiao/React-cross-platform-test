import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import repos from './repos';

const rootReducer = combineReducers({
  repos,
  routing
});

export default rootReducer;
