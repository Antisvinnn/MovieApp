import { combineReducers } from 'redux';
import companiesReducer from './companiesReducer';

const rootReducer = combineReducers({
	companies: companiesReducer,
});

export default rootReducer;
