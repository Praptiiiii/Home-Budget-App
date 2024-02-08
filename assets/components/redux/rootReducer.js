
import { combineReducers } from 'redux';
import { budgetReducer } from './reducer';

const rootReducer = combineReducers({
  budget: budgetReducer, 
});


export default rootReducer;
